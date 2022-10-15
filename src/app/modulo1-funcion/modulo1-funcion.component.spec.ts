import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1FuncionComponent } from './modulo1-funcion.component';

describe('Modulo1FuncionComponent', () => {
  let component: Modulo1FuncionComponent;
  let fixture: ComponentFixture<Modulo1FuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1FuncionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1FuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
