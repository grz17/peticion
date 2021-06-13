import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumanumerosComponent } from './sumanumeros.component';

describe('SumanumerosComponent', () => {
  let component: SumanumerosComponent;
  let fixture: ComponentFixture<SumanumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumanumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumanumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
