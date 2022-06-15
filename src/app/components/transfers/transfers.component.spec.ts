/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TransferListComponent } from './transfers.component';

describe('TransferListComponent', () => {
	let component: TransferListComponent;
	let fixture: ComponentFixture<TransferListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TransferListComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TransferListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
