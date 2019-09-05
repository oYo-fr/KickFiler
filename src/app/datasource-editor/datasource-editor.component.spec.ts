import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasourceEditorComponent } from './datasource-editor.component';

describe('DatasourceEditorComponent', () => {
  let component: DatasourceEditorComponent;
  let fixture: ComponentFixture<DatasourceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasourceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasourceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
