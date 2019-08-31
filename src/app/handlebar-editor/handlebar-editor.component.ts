import { Component, OnInit } from '@angular/core';
import { AppContext } from './../AppContext';

@Component({
	selector: 'app-handlebar-editor',
	templateUrl: './handlebar-editor.component.html',
	styleUrls: ['./handlebar-editor.component.scss']
})
export class HandlebarEditorComponent implements OnInit {
	handlebarsEditorOptions = { theme: 'vs-dark', language: 'handlebars', automaticLayout: true };

	constructor(public context: AppContext) { }

	ngOnInit() {
	}

	onKey(event: any) {
		this.context.Update();
	}
}
