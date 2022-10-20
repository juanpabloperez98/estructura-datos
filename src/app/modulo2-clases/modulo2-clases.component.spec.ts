import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2ClasesComponent } from './modulo2-clases.component';

describe('Modulo2ClasesComponent', () => {
  let component: Modulo2ClasesComponent;
  let fixture: ComponentFixture<Modulo2ClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo2ClasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo2ClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
