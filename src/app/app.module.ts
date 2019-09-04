import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GoldenLayoutModule, GoldenLayoutConfiguration, ComponentConfiguration } from '@embedded-enterprises/ng6-golden-layout';
import * as $ from 'jquery';
import { HandlebarEditorComponent } from './handlebar-editor/handlebar-editor.component';
import { AppContext } from './AppContext';
import { OutputViewerComponent } from './output-viewer/output-viewer.component';
import { DatasourceEditorComponent } from './datasource-editor/datasource-editor.component';
import { SelectorEditorComponent } from './selector-editor/selector-editor.component';
import { SelectionViewerComponent } from './selection-viewer/selection-viewer.component'
import { MarkdownModule } from 'ngx-markdown';

window['$'] = $;

var comConf: ComponentConfiguration = {
	component: HandlebarEditorComponent,
	componentName: 'HandlebarEditor'
}

const config: GoldenLayoutConfiguration = {
	components: [{
		component: HandlebarEditorComponent,
		componentName: 'HandlebarEditor'
	}, {
		component: OutputViewerComponent,
		componentName: 'OutputViewer'
	}, {
		component: DatasourceEditorComponent,
		componentName: 'DatasourceEditor'
	}, {
		component: SelectorEditorComponent,
		componentName: 'SelectorEditor'
	}, {
		component: SelectionViewerComponent,
		componentName: 'SelectionViewer'
	}],
	defaultLayout: {
		content: [{
			type: 'row',
			content: [{
				type: 'component',
				componentName: 'HandlebarEditor'
			}, {
				type: 'component',
				componentName: 'OutputViewer'
			}, {
				type: 'component',
				componentName: 'DatasourceEditor'
			}, {
				type: 'component',
				componentName: 'SelectorEditor'
			}, {
				type: 'component',
				componentName: 'SelectionViewer'
			}]
		}]
	}
};

@NgModule({
	declarations: [
		AppComponent,
		HandlebarEditorComponent,
		OutputViewerComponent,
		DatasourceEditorComponent,
		SelectorEditorComponent,
		SelectionViewerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MonacoEditorModule.forRoot(),
		NgxJsonViewerModule,
		BrowserAnimationsModule,
		MatTabsModule,
		MatExpansionModule,
		MatGridListModule,
		MatSidenavModule,
		GoldenLayoutModule.forRoot(config),
		MarkdownModule.forRoot()
	],
	providers: [AppContext],
	bootstrap: [AppComponent],
	entryComponents: [HandlebarEditorComponent, OutputViewerComponent, DatasourceEditorComponent, SelectorEditorComponent, SelectionViewerComponent]
})
export class AppModule { }
