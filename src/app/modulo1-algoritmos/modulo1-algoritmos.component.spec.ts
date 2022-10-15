import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1AlgoritmosComponent } from './modulo1-algoritmos.component';

describe('Modulo1AlgoritmosComponent', () => {
  let component: Modulo1AlgoritmosComponent;
  let fixture: ComponentFixture<Modulo1AlgoritmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1AlgoritmosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1AlgoritmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
