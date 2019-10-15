import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSayVerseComponent } from './main-say-verse.component';

describe('MainSayVerseComponent', () => {
  let component: MainSayVerseComponent;
  let fixture: ComponentFixture<MainSayVerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSayVerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSayVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
