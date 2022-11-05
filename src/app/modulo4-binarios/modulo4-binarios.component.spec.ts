import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo4BinariosComponent } from './modulo4-binarios.component';

describe('Modulo4BinariosComponent', () => {
  let component: Modulo4BinariosComponent;
  let fixture: ComponentFixture<Modulo4BinariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo4BinariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo4BinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
