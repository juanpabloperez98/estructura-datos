import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1TipoComponent } from './modulo1-tipo.component';

describe('Modulo1TipoComponent', () => {
  let component: Modulo1TipoComponent;
  let fixture: ComponentFixture<Modulo1TipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1TipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1TipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
