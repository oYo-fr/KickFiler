import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlebarEditorComponent } from './handlebar-editor.component';

describe('HandlebarEditorComponent', () => {
  let component: HandlebarEditorComponent;
  let fixture: ComponentFixture<HandlebarEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandlebarEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlebarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
