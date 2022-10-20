import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3PilasComponent } from './modulo3-pilas.component';

describe('Modulo3PilasComponent', () => {
  let component: Modulo3PilasComponent;
  let fixture: ComponentFixture<Modulo3PilasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo3PilasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo3PilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
