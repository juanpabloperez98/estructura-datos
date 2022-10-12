import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstraccionDatosComponent } from './abstraccion-datos.component';

describe('AbstraccionDatosComponent', () => {
  let component: AbstraccionDatosComponent;
  let fixture: ComponentFixture<AbstraccionDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstraccionDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstraccionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
