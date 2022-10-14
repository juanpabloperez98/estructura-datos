import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBlankComponent } from './intro-blank.component';

describe('IntroBlankComponent', () => {
  let component: IntroBlankComponent;
  let fixture: ComponentFixture<IntroBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroBlankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
