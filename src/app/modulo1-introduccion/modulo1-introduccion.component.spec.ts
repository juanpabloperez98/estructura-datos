import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1IntroduccionComponent } from './modulo1-introduccion.component';

describe('Modulo1IntroduccionComponent', () => {
  let component: Modulo1IntroduccionComponent;
  let fixture: ComponentFixture<Modulo1IntroduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1IntroduccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1IntroduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
