import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1RepresentacionComponent } from './modulo1-representacion.component';

describe('Modulo1RepresentacionComponent', () => {
  let component: Modulo1RepresentacionComponent;
  let fixture: ComponentFixture<Modulo1RepresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo1RepresentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo1RepresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
