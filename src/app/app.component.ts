import { Component, Input } from '@angular/core';
import * as Handlebars from 'handlebars/dist/handlebars';
import swaggerSample from '../assets/swagger.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KickFiler';
  input: string = "    {{#each definitions}}  {{@key}}  {{/each}}";
  output: string = '';
  selector: string = 'properties = [];\n  for (var property1 in data.definitions) {\n    properties.push({\n        name: property1,\n        value: data.definitions[property1]\n    });\n  }\n  return properties;';
  editorOptions = {theme: 'vs-dark', language: 'csharp'};
  selections: any = null;
  handlebarsEditorOptions = {theme: 'vs-dark', language: 'handlebars'};
  javascriptEditorOptions = {theme: 'vs-dark', language: 'javascript'};
  view = {
    button: 'This is the name of a button',
    numbers: [
        {name: 'One', value: 1},
        {name: 'Two', value: 2},
        {name: 'Three', value: 3},
    ]
  };
  public constructor(){
    try{
      this.selections = new Function('data',this.selector)(swaggerSample);
    }catch{

    }
    this.output = Handlebars.compile(this.input)(swaggerSample);
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
  onKey(event: any) {
    try{
      this.selections = new Function('data',this.selector)(swaggerSample);
    }catch{

    }

    this.output = Handlebars.compile(this.input)(swaggerSample);
  }
}
