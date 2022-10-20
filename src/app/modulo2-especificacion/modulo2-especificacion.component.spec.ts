import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2EspecificacionComponent } from './modulo2-especificacion.component';

describe('Modulo2EspecificacionComponent', () => {
  let component: Modulo2EspecificacionComponent;
  let fixture: ComponentFixture<Modulo2EspecificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo2EspecificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo2EspecificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
