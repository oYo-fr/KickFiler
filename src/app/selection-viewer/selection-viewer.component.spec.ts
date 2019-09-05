import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionViewerComponent } from './selection-viewer.component';

describe('SelectionViewerComponent', () => {
  let component: SelectionViewerComponent;
  let fixture: ComponentFixture<SelectionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
