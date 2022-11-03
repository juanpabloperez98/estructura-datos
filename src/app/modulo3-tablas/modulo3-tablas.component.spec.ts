import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3TablasComponent } from './modulo3-tablas.component';

describe('Modulo3TablasComponent', () => {
  let component: Modulo3TablasComponent;
  let fixture: ComponentFixture<Modulo3TablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo3TablasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo3TablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
