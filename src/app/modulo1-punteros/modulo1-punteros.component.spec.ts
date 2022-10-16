import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1PunterosComponent } from './modulo1-punteros.component';

describe('Modulo1PunterosComponent', () => {
  let component: Modulo1PunterosComponent;
  let fixture: ComponentFixture<Modulo1PunterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1PunterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1PunterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
