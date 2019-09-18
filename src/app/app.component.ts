import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { AppContext } from './AppContext';
import { ContextService } from './services/context.service';
import { FlatTreeControl } from '@angular/cdk/tree';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject } from 'rxjs';
import { FileNode } from './models/file-node.model';
import { TemplateOutputType } from './models/template-output-type.model';
import { Template } from './models/template.model';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [ContextService]
})
export class AppComponent implements OnInit {

	nestedTreeControl: NestedTreeControl<FileNode>;
	nestedDataSource: MatTreeNestedDataSource<FileNode>;
	nestedTreeControlSelections: NestedTreeControl<FileNode>;
	nestedDataSourceSelections: MatTreeNestedDataSource<FileNode>;

	templateOutputTypes: string[] = [
		'Json', 'C#'
	];


	hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

	private _getChildren = (node: FileNode) => node.children;
	//public layout$ = new BehaviorSubject(CONFIG2);
	//@ViewChild(GoldenLayoutComponent, { static: true }) layout: GoldenLayoutComponent;
	title = 'KickFiler';
	editorOptions = { theme: 'vs-dark', language: 'csharp', automaticLayout: true };
	javascriptEditorOptions = { theme: 'vs-dark', language: 'javascript', automaticLayout: true };
	jsonEditorOptions = { theme: 'vs-dark', language: 'json', automaticLayout: true };
	dataChange = new BehaviorSubject<FileNode[]>([]);

	onKey(event: any) {
		this.contextService.Update();
	}

	async onChangeProjectDataSource(){
		await this.contextService.UpdateSelections();
	}

	Save(event: any) {
		console.log('Saving');
		this.contextService.Save();
	}

	onKeyMustache(event: any) {
		this.contextService.UpdateMustache();
		this.contextService.Save();
	}

	CreateNewTemplate(){
		console.log('Creating  new template');
		let template: Template = new Template();
		template.Name = 'New template';
		this.contextService.Templates.push(template);
		this.contextService.SelectedTemplate = template;
		this.contextService.Update();
	}

	SelectTemplate(template){
		this.contextService.SelectedTemplate = template;
		this.contextService.UpdateSelector();
	}

	public constructor(public context: AppContext, public contextService: ContextService) {
		contextService.Load();
		this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
		this.nestedDataSource = new MatTreeNestedDataSource();
		this.nestedTreeControlSelections = new NestedTreeControl<FileNode>(this._getChildren);
		this.nestedDataSourceSelections = new MatTreeNestedDataSource();
		contextService.dataChange.subscribe(data => this.nestedDataSource.data = data);
		contextService.selectionsChange.subscribe(data => this.nestedDataSourceSelections.data = data);
	}

	ngOnInit() {
		console.log(document.getElementById('Layout'));
	}
	public stateChange(eventName: string, callback: Function, context?: any) {
		console.log('test');
	}
	/*
	Snippet for definitions selection:
	properties = [];
	for (var property1 in data.definitions) {
	  properties.push({
		  name: property1,
		  value: data.definitions[property1]
	  });
	}
	return properties;
	 */

}
