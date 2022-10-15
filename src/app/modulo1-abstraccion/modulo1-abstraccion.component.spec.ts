import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1AbstraccionComponent } from './modulo1-abstraccion.component';

describe('Modulo1AbstraccionComponent', () => {
  let component: Modulo1AbstraccionComponent;
  let fixture: ComponentFixture<Modulo1AbstraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1AbstraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1AbstraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
