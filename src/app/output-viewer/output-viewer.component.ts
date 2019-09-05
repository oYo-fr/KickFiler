import { Component, OnInit } from '@angular/core';
import { AppContext } from './../AppContext';

@Component({
	selector: 'app-output-viewer',
	templateUrl: './output-viewer.component.html',
	styleUrls: ['./output-viewer.component.scss']
})
export class OutputViewerComponent implements OnInit {
	outputEditorOptions = { theme: 'vs-dark', language: 'csharp', automaticLayout: true };

	displayedOutput: string;
	constructor(public context: AppContext) {
	}

	ngOnInit() {
	}

}
