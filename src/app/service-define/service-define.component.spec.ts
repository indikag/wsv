import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDefineComponent } from './service-define.component';

describe('ServiceDefineComponent', () => {
  let component: ServiceDefineComponent;
  let fixture: ComponentFixture<ServiceDefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
