import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule, NbMenuModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { ContextMenuModule } from 'ngx-contextmenu';
import { ModalModule } from 'ngx-modialog-7';
// tslint:disable-next-line: no-submodule-imports
import { VexModalModule } from 'ngx-modialog-7/plugins/vex';
import { PaginationService } from 'ngx-pagination';
import { ResponsiveModule } from 'ngx-responsive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ResponsiveModule.forRoot(),
		NbThemeModule.forRoot({ name: 'rclone' }),
		NbMenuModule.forRoot(),
		NbToastrModule.forRoot(),
		NbLayoutModule,
		ModalModule.forRoot(),
		ContextMenuModule.forRoot({ useBootstrap4: true }),
		VexModalModule,
	],
	providers: [PaginationService],
	bootstrap: [AppComponent],
})
export class AppModule {}
