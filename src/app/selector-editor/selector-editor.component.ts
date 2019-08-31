import { Component, OnInit } from '@angular/core';
import { AppContext } from './../AppContext';

@Component({
  selector: 'app-selector-editor',
  templateUrl: './selector-editor.component.html',
  styleUrls: ['./selector-editor.component.scss']
})
export class SelectorEditorComponent implements OnInit {
	javascriptEditorOptions = { theme: 'vs-dark', language: 'javascript', automaticLayout: true };

	constructor(public context: AppContext) { }

	ngOnInit() {
	}

	onKey(event: any) {
		this.context.Update();
	}
}
