import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormatComponent } from './complex-format.component';

describe('ComplexFormatComponent', () => {
  let component: ComplexFormatComponent;
  let fixture: ComponentFixture<ComplexFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
