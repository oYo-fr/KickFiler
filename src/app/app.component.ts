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
  editorOptions = {theme: 'vs-dark', language: 'csharp'};
  handlebarsEditorOptions = {theme: 'vs-dark', language: 'handlebars'}
  view = {
    button: 'This is the name of a button',
    numbers: [
        {name: 'One', value: 1},
        {name: 'Two', value: 2},
        {name: 'Three', value: 3},
    ]
  };
  public constructor(){
    this.output = Handlebars.compile(this.input)(swaggerSample);
  }
  onKey(event: any) { // without type info
    this.output = Handlebars.compile(this.input)(swaggerSample);
  }
}
