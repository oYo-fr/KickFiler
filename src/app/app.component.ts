import { Component, Input } from '@angular/core';

import { AppContext } from './AppContext';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KickFiler';
  editorOptions = {theme: 'vs-dark', language: 'csharp', automaticLayout: true};
  javascriptEditorOptions = {theme: 'vs-dark', language: 'javascript', automaticLayout: true};

  public constructor(public context: AppContext){

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
