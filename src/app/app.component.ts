import { Component, Input } from '@angular/core';

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
  view = {
    button: 'This is the name of a button',
    numbers: [
        {name: 'One', value: 1},
        {name: 'Two', value: 2},
        {name: 'Three', value: 3},
    ]
  };
  onKey(event: any) { // without type info
  }
}
