import { Component, OnInit } from '@angular/core';
import { AppContext } from './../AppContext';

@Component({
  selector: 'app-selection-viewer',
  templateUrl: './selection-viewer.component.html',
  styleUrls: ['./selection-viewer.component.scss']
})
export class SelectionViewerComponent implements OnInit {

	constructor(public context: AppContext) { }

	ngOnInit() {
	}

}
