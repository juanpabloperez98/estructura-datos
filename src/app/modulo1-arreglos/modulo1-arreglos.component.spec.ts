import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1ArreglosComponent } from './modulo1-arreglos.component';

describe('Modulo1ArreglosComponent', () => {
  let component: Modulo1ArreglosComponent;
  let fixture: ComponentFixture<Modulo1ArreglosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1ArreglosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1ArreglosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
