import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormatComponent } from './simple-format.component';

describe('SimpleFormatComponent', () => {
  let component: SimpleFormatComponent;
  let fixture: ComponentFixture<SimpleFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
