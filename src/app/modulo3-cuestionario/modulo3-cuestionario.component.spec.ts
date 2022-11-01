import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3CuestionarioComponent } from './modulo3-cuestionario.component';

describe('Modulo3CuestionarioComponent', () => {
  let component: Modulo3CuestionarioComponent;
  let fixture: ComponentFixture<Modulo3CuestionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo3CuestionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo3CuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
