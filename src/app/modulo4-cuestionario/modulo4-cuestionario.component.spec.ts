import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo4CuestionarioComponent } from './modulo4-cuestionario.component';

describe('Modulo4CuestionarioComponent', () => {
  let component: Modulo4CuestionarioComponent;
  let fixture: ComponentFixture<Modulo4CuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo4CuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo4CuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
