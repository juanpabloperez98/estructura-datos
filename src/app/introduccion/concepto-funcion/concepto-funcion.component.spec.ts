import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptoFuncionComponent } from './concepto-funcion.component';

describe('ConceptoFuncionComponent', () => {
  let component: ConceptoFuncionComponent;
  let fixture: ComponentFixture<ConceptoFuncionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptoFuncionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptoFuncionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
