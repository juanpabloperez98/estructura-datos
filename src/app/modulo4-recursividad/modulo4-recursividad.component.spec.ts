import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo4RecursividadComponent } from './modulo4-recursividad.component';

describe('Modulo4RecursividadComponent', () => {
  let component: Modulo4RecursividadComponent;
  let fixture: ComponentFixture<Modulo4RecursividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo4RecursividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo4RecursividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
