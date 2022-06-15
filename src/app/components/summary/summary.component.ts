import { Component, Input, OnInit } from '@angular/core';
import { CoreStatsFlow, CoreStatsFlowOutItemNode } from '../../@dataflow/rclone';
import { FormatBytes } from '../../utils/format-bytes';
import { ForamtDuration } from '../../utils/format-duration';

@Component({
	selector: 'app-rng-summary',
	template: `
		<div class="row">
			<div class="col-6"><app-rng-kv-table [keys]="keys" [data]="values"> </app-rng-kv-table></div>
			<div class="col-6"><app-rng-kv-table [keys]="keys2" [data]="values"> </app-rng-kv-table></div>
		</div>
	`,
	styles: [],
})
export class RngSummaryComponent implements OnInit {
	@Input()
	stats$: CoreStatsFlow;

	keys: { key: string; title?: string }[] = [
		{ key: 'etaHumanReadable', title: 'ETA' },
		{ key: 'bytesHumanReadable', title: 'Transfered' },
		{ key: 'leftBytesHumanReadable', title: 'Left' },
		{ key: 'speedHumanReadable', title: 'Speed' },
		{ key: 'transferring-count', title: 'Transferring' },
		{ key: 'transfers', title: 'Completed' },
		{ key: 'checking-count', title: 'Checking' },
		{ key: 'checks', title: 'Checked' },
	];
	keys2: { key: string; title?: string }[] = [
		{ key: 'durationHumanReadable', title: 'Duration' },
		{ key: 'totalBytesHumanReadable', title: 'Total' },
		{ key: 'deletes', title: 'Deleted' },
		{ key: 'deletedDirs', title: 'Deleted (Dir)' },
		{ key: 'errors', title: 'Errors' },
		{ key: 'fatalError', title: 'Fatal Error' },
		{ key: 'retryError', title: 'Retry Error' },
		{ key: 'lastError', title: 'Last Error Log' },
	];
	values: CoreStatsFlowOutItemNode & {
		speedHumanReadable: string;
		etaHumanReadable: string;
		bytesHumanReadable: string;
		totalBytesHumanReadable: string;
		leftBytesHumanReadable: string;
		durationHumanReadable: string;
	} = {} as any;

	constructor() {}
	isDefine(val: any) {
		return typeof val !== 'undefined';
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
		});
	}
}
