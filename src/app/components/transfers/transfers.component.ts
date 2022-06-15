import { Component, Input, OnInit } from '@angular/core';
// import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { CoreStatsFlow, ITransferring } from '../../@dataflow/rclone';
import { FormatBytes } from '../../utils/format-bytes';
import { ForamtDuration } from '../../utils/format-duration';

@Component({
	selector: 'app-transfer-list',
	template: `
		<div class="row full">
			<div class="container-fluid">
				<table class="table table-dark">
					<!-- <thead>
						<tr>
							<th scope="col">Filename</th>
							<th scope="col">Size</th>
							<th scope="col">Progress/Speed</th>
							<th scope="col">ETA</th>
						</tr>
					</thead> -->
					<tbody>
						<tr
							*ngFor="let row of data"
							style="background-image: linear-gradient(to right, #ffffff0f {{
								row.perc
							}}%, transparent {{ row.perc }}%)"
						>
							<td class="name">
								<small class="mono muted">{{ row.path }}</small>
								<br />
								<strong class="mono">{{ row.pathName }}</strong>
							</td>
							<td class="stat">
								<span class="muted">{{ row.doneSizeHumanReadable }}<br />/ </span>
								<strong>{{ row.sizeHumanReadable }}</strong>
							</td>
							<td class="stat text-center">
								<span class="badge badge-pill badge-dark">{{ row.perc }} %</span>
								<br />
								<strong>{{ row.speedHumanReadable }}</strong>
							</td>
							<td class="stat">{{ row.etaHumanReadable }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`,
	styles: [
		`
			.row.full {
				margin: -1rem -1.5rem;
			}
			.row .container-fluid {
				margin: 0;
				padding: 0;
			}
			td {
				font-family: Pretendard, sans-serif;
				word-break: break-all;
				white-space: normal;
				vertical-align: middle;
			}
			td.name {
				width: 80%;
				max-width: 80%;
				overflow-x: scroll;
			}
			.mono {
				font-family: Menlo, monospace;
			}
			td.stat {
				min-width: 120px;
				word-break: keep-all;
				white-space: nowrap;
			}
			td.stat .badge {
				font-size: 0.8rem;
			}
			.small {
				font-size: 0.3rem;
			}
			.strong {
				font-size: 0.8rem;
			}
			.table-dark {
				background: transparent;
				margin-bottom: 0;
			}
			.table-dark td {
				border-color: rgb(0 0 0 / 0.5);
				font-size: 0.8rem;
				padding: 0.3rem 0.6rem;
			}
			.muted {
				opacity: 0.5;
			}
		`,
	],
})
export class TransferListComponent implements OnInit {
	@Input()
	stats$: CoreStatsFlow;

	public data: (ITransferring & {
		doneSizeHumanReadable: string;
		sizeHumanReadable: string;
		speedHumanReadable: string;
		etaHumanReadable: string;
		pathName: string;
		path: string;
		perc: number;
	})[] = [];

	constructor() {}

	ngOnInit() {
		this.stats$.getOutput().subscribe(([x, err]) => {
			if (err.length !== 0) return;
			const data = x['core-stats'].transferring;
			this.data = data ? data : ([] as any);
			this.data.forEach(y => {
				y.bytes = y.bytes > 0 ? y.bytes : 0;
				y.sizeHumanReadable = FormatBytes(y.size, 3);
				y.doneSizeHumanReadable = FormatBytes(y.bytes, 3);
				y.perc = Math.round((y.bytes / y.size) * 10000) / 100;
				y.speedHumanReadable = FormatBytes(y.speed) + '/s';
				y.etaHumanReadable =
					typeof y.eta === 'number' ? ForamtDuration.humanize(y.eta * 1000, { largest: 3 }) : '-';

				const p = y.name.split('/');
				y.pathName = p.pop();
				y.path = p.join('/') + '/';
			});
		});
	}
}
