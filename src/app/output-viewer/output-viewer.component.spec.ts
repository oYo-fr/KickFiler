import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputViewerComponent } from './output-viewer.component';

describe('OutputViewerComponent', () => {
  let component: OutputViewerComponent;
  let fixture: ComponentFixture<OutputViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
