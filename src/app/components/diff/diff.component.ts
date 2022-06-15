import { Component, Input, OnInit } from '@angular/core';
import { FormatBytes } from '../../utils/format-bytes';

@Component({
	selector: 'app-rng-diff',
	template: `
		<span class="rng-diff"> {{ (val < 0 ? '-' + FormatBytes(-val, 0) : FormatBytes(val, 0)) + suffic }} </span>
		<nb-icon
			[icon]="val < 0 ? 'arrow-down' : val > 0 ? 'arrow-up' : 'minus'"
			[status]="val < 0 ? 'danger' : val > 0 ? 'success' : 'basic'"
		>
		</nb-icon>
	`,
	styles: [
		`
			nb-icon {
				font-size: 1rem;
				line-height: 0.95;
			}
			.rng-diff {
				font-family: 'Menlo', monospace;
			}
		`,
	],
})
export class RngDiffComponent implements OnInit {
	@Input() val = 0;

	@Input() suffic = '';

	FormatBytes = FormatBytes;

	constructor() {}

	ngOnInit() {}
}
