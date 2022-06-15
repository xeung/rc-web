import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CoreStatsFlow, CoreStatsFlowOutItemNode } from '../../@dataflow/rclone';
import { FormatBytes } from '../../utils/format-bytes';
import { ForamtDuration } from '../../utils/format-duration';

@Component({
	selector: 'app-rng-summary',
	template: `
		<div class="row">
			<div *ngIf="values['perc'] >= 0" class="col-12">
				<div class="progress">
					<div
						class="progress-bar progress-bar-striped progress-bar-animated"
						role="progressbar"
						style="width: {{ values['perc'] }}%;"
					>
						{{ values['percStr'] }}
					</div>
				</div>
			</div>
			<div class="col-6"><app-rng-kv-table [keys]="keys" [data]="values"> </app-rng-kv-table></div>
			<div class="col-6"><app-rng-kv-table [keys]="keys2" [data]="values"> </app-rng-kv-table></div>
			<div *ngIf="values['lastError']" class="col-12">
				<div class="alert alert-danger mono" role="alert">
					<strong>ERROR!</strong>
					{{ values['lastError'] }}
				</div>
			</div>
		</div>
	`,
	styles: [
		`
			.progress {
				background: rgb(255 255 255 / 5%);
				margin-bottom: 0.5rem;
			}
			.mono {
				font-family: Menlo, monospace;
			}
			.alert {
				margin-top: 0.5rem;
				margin-bottom: 0;
				padding: 0.4rem 0.6rem;
				font-size: 0.8rem;
				line-height: 1rem;
			}
		`,
	],
})
export class RngSummaryComponent implements OnInit {
	@Input()
	stats$: CoreStatsFlow;

	keys: { key: string; title?: string }[] = [
		{ key: 'durationHumanReadable', title: 'Duration' },
		{ key: 'bytesHumanReadable', title: 'Transfered' },
		{ key: 'leftBytesHumanReadable', title: 'Left' },
		{ key: 'transferring-count', title: 'Transferring' },
		{ key: 'transfers', title: 'Completed' },
		{ key: 'checking-count', title: 'Checking' },
		{ key: 'checks', title: 'Checked' },
	];
	keys2: { key: string; title?: string }[] = [
		{ key: 'etaHumanReadable', title: 'ETA' },
		{ key: 'speedHumanReadable', title: 'Speed' },
		{ key: 'totalBytesHumanReadable', title: 'Total' },
		{ key: 'percStr', title: 'Progress' },
		// { key: 'deletes', title: 'Deleted' },
		// { key: 'deletedDirs', title: 'Deleted (Dir)' },
		{ key: 'deleted', title: 'Deleted (Dir)' },
		{ key: 'errors', title: 'Errors' },
		{ key: 'errStat', title: 'Fatal / Retry' },
		// { key: 'fatalError', title: 'Fatal Error' },
		// { key: 'retryError', title: 'Retry Error' },
		// { key: 'lastError', title: 'Last Error Log' },
	];
	values: CoreStatsFlowOutItemNode & {
		speedHumanReadable: string;
		etaHumanReadable: string;
		bytesHumanReadable: string;
		totalBytesHumanReadable: string;
		leftBytesHumanReadable: string;
		durationHumanReadable: string;
		deleted: string;
		perc: number;
		percStr: string;
		err: string;
		errStat: string;
	} = {} as any;

	constructor(private titleService: Title) {}
	isDefine(val: any) {
		return typeof val !== 'undefined';
	}

	setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	ngOnInit() {
		this.stats$.getOutput().subscribe(([x, err]) => {
			if (err.length !== 0) return;
			let speed = 0;
			if (this.values.transferring) {
				this.values.transferring.forEach(y => {
					if (y.speed) speed += y.speed;
				});
			}
			this.values = JSON.parse(JSON.stringify(x['core-stats']));
			this.values.deleted = this.values.deletes + ' (' + this.values.deletedDirs + ')';
			this.values.errStat = this.values.fatalError + ' / ' + this.values.retryError;
			this.values.perc = Math.round((this.values.bytes / this.values.totalBytes) * 1000) / 10;
			this.values.percStr = this.values.perc + ' %';

			this.values.bytesHumanReadable = FormatBytes(this.values.bytes, 4);
			this.values.totalBytesHumanReadable = FormatBytes(this.values.totalBytes, 4);
			this.values.leftBytesHumanReadable = FormatBytes(
				this.values.totalBytes - this.values.bytes,
				4
			);
			this.values.speedHumanReadable = FormatBytes(speed, 4) + '/s';
			this.values.durationHumanReadable = ForamtDuration.humanize(this.values.elapsedTime * 1000, {
				language: 'shortEn',
				round: true,
			});
			this.values.etaHumanReadable = ForamtDuration.humanize(this.values.eta * 1000, {
				language: 'shortEn',
				round: true,
			});
			this.values['transferring-count'] = this.values.transferring
				? this.values.transferring.length
				: 0;
			this.values['checking-count'] = this.values.checking ? this.values.checking.length : 0;

			this.setTitle(FormatBytes(speed, 2) + '/s (' + this.values.percStr + ')');
		});
	}
}
