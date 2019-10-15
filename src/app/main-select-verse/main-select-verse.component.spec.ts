import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSelectVerseComponent } from './main-select-verse.component';

describe('MainSelectVerseComponent', () => {
  let component: MainSelectVerseComponent;
  let fixture: ComponentFixture<MainSelectVerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSelectVerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSelectVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
