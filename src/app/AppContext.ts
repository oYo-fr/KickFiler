
import { Injectable } from '@angular/core';
import * as Handlebars from 'handlebars/dist/handlebars';
import swaggerSample from '../assets/swagger.json';

@Injectable()
export class AppContext {
	mustache: string = "public class {{name}}{\n}";
	selector: string = 'properties = [];\n  for (var property1 in data.definitions) {\n    properties.push({\n        name: property1,\n        value: data.definitions[property1]\n    });\n  }\n  return properties;';
	selections: any = null;
	datasource: any = {
		type: 'json',
		content: '',
		result: null
	}
	results: any = []

	public constructor() {
		this.datasource.content = JSON.stringify(swaggerSample, null, 2);

		this.datasource.result = JSON.parse(this.datasource.content);
		try {
			this.selections = new Function('data', this.selector)(this.datasource.result);

		} catch (e) {
			console.log(e);
		}
		this.results = [];
		this.selections.forEach(s => {
			this.results.push({
				selection: s,
				output: Handlebars.compile(this.mustache)(s)
			});
		});
	}

	public Update() {
		console.log('updating');

		this.datasource.result = JSON.parse(this.datasource.content);
		try {
			this.selections = new Function('data', this.selector)(this.datasource.result);

		} catch (e) {
			console.log(e);
		}
		this.results = [];
		this.selections.forEach(s => {
			this.results.push({
				selection: s,
				output: Handlebars.compile(this.mustache)(s)
			});
		});

		this.results.forEach(r => {
			r.output = Handlebars.compile(this.mustache)(r.selection)
		});
	}
}
