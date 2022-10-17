import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2AbstraccionComponent } from './modulo2-abstraccion.component';

describe('Modulo2AbstraccionComponent', () => {
  let component: Modulo2AbstraccionComponent;
  let fixture: ComponentFixture<Modulo2AbstraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo2AbstraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo2AbstraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
