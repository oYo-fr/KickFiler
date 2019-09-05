import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorEditorComponent } from './selector-editor.component';

describe('SelectorEditorComponent', () => {
  let component: SelectorEditorComponent;
  let fixture: ComponentFixture<SelectorEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
