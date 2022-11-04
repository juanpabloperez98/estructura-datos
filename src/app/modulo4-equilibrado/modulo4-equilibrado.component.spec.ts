import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo4EquilibradoComponent } from './modulo4-equilibrado.component';

describe('Modulo4EquilibradoComponent', () => {
  let component: Modulo4EquilibradoComponent;
  let fixture: ComponentFixture<Modulo4EquilibradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo4EquilibradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo4EquilibradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
