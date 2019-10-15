import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlansComponent } from './main-plans.component';

describe('MainPlansComponent', () => {
  let component: MainPlansComponent;
  let fixture: ComponentFixture<MainPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
