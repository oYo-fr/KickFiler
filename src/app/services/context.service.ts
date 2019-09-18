import { Injectable, Component } from '@angular/core';
import { Project } from '../models/project.model';
import { Template } from '../models/template.model';
import swaggerSample from '../../assets/swagger.json';
import { Result } from '../models/result.model';
import * as Handlebars from 'handlebars/dist/handlebars';
import { BehaviorSubject } from 'rxjs';
import { FileNode } from '../models/file-node.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class ContextService {
	dataChange = new BehaviorSubject<FileNode[]>([]);
	selectionsChange = new BehaviorSubject<FileNode[]>([]);
	public Projects: Project[] = null;
	public Templates: Template[] = null;
	public SelectedProject: Project = null;
	public SelectedTemplate: Template = null;
	public RootDataSource: any = null;
	public Results: Result[];
	public Selections: any[];
	public CurrentStep: string;

	constructor(private _snackBar: MatSnackBar) { }

	private Notify(message: string){
		this.CurrentStep = message;
		console.log(message);
	}

	public Load() {
		this.Projects = JSON.parse(localStorage.getItem('Projects'));
		this.Templates = JSON.parse(localStorage.getItem('Templates'));
		if (this.Projects === null || this.Templates === null) {
			this.LoadSampleData();
		}
		if (this.Projects.length > 0)
			this.SelectedProject = this.Projects[0];
		if (this.Templates.length > 0)
			this.SelectedTemplate = this.Templates[0];
		this.UpdateSelector();
	}

	private LoadSampleData() {
		this.Projects = [];
		let defaultProject = new Project();
		defaultProject.DataSource = JSON.stringify(swaggerSample, null, 2);
		defaultProject.Name = "Sample project";
		this.Projects.push(defaultProject);

		this.Templates = [];
		let defaultTemplate = new Template();
		defaultTemplate.Name = "Create classes";
		defaultTemplate.Selector = 'properties = [];\n  for (var property1 in data.definitions) {\n    properties.push({\n        name: property1,\n        value: data.definitions[property1]\n    });\n  }\n  return properties;';
		defaultTemplate.Mustache = "public class {{name}}{\n}";
		this.Templates.push(defaultTemplate);

		this.SelectedProject = defaultProject;
		this.SelectedTemplate = defaultTemplate;
	}

	public Save() {
		this.Notify("Saving projects and templates");
		localStorage.setItem('Projects', JSON.stringify(this.Projects, null, 2));
		localStorage.setItem('Templates', JSON.stringify(this.Templates, null, 2));
	}

	public UpdateMustache(){
		if (this.SelectedProject === null || this.SelectedTemplate === null) return;
		this.Notify("Applying mustache template");
		try {
			this.Selections.forEach(s => {
				this.Results[this.Selections.indexOf(s)].Content = Handlebars.compile(this.SelectedTemplate.Mustache)(s);
			});
		} catch (e) {
			console.log(e);
		}
	}

	Selector: Function;
	public UpdateSelector(){
		this.Notify("Rebuilding selector function");
		if (this.SelectedProject === null || this.SelectedTemplate === null) return;
		this.RootDataSource = JSON.parse(this.SelectedProject.DataSource);
		this.Selector = new Function('data', this.SelectedTemplate.Selector);
		this.UpdateSelections();
	}

	public UpdateSelections(){
		this.Notify("Applying selector");
		if (this.SelectedProject === null || this.SelectedTemplate === null) return;
		try {
			this.RootDataSource = JSON.parse(this.SelectedProject.DataSource);
			this.Selections = this.Selector(this.RootDataSource);
		} catch (e) {
			console.log(e);
		}
		this.Update();
	}

	public Update() {
		if (this.SelectedProject === null || this.SelectedTemplate === null) return;
		this.Notify("Applying mustache template");

		let handlebar = Handlebars.compile(this.SelectedTemplate.Mustache);
		try {
			this.Results = [];
			this.Selections.forEach(s => {
				this.Results.push({
					Data: s,
					Content: handlebar(s)
				});
			});
		} catch (e) {
			console.log(e);
		}

		// Build the tree nodes from Json object. The result is a list of `FileNode` with nested
		//     file node as children.

		this.Notify("Building left tree");
		let data = this.buildFileTree(this.RootDataSource, 0);

		// Notify the change.
		this.dataChange.next(data);

		let selections = this.buildFileTree(this.Selections, 0);
		this.selectionsChange.next(selections);
		this.Save();
		this.Notify("");
	}

	buildFileTree(obj: { [key: string]: any }, level: number): FileNode[] {
		return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
			const value = obj[key];
			const node = new FileNode();
			node.key = key;

			if (value != null) {
				if (typeof value === 'object') {
					node.children = this.buildFileTree(value, level + 1);
					node.value = JSON.stringify(value, null, 2);
				} else {
					node.type = value;
					node.value = value;
				}
			}

			return accumulator.concat(node);
		}, []);
	}

	get data(): FileNode[] { return this.dataChange.value; }
}
