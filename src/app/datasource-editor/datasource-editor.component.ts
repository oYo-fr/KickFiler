import { Component, OnInit } from '@angular/core';
import { AppContext } from './../AppContext';

@Component({
	selector: 'app-datasource-editor',
	templateUrl: './datasource-editor.component.html',
	styleUrls: ['./datasource-editor.component.scss']
})
export class DatasourceEditorComponent implements OnInit {
	jsonEditorOptions = { theme: 'vs-dark', language: 'json', automaticLayout: true };

	constructor(public context: AppContext) { }

	ngOnInit() {
	}

	onKey(event: any) {
		this.context.Update();
	}
}
