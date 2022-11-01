import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3ColasPrioridadesComponent } from './modulo3-colas-prioridades.component';

describe('Modulo3ColasPrioridadesComponent', () => {
  let component: Modulo3ColasPrioridadesComponent;
  let fixture: ComponentFixture<Modulo3ColasPrioridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo3ColasPrioridadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo3ColasPrioridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
