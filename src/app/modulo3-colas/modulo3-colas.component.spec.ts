import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3ColasComponent } from './modulo3-colas.component';

describe('Modulo3ColasComponent', () => {
  let component: Modulo3ColasComponent;
  let fixture: ComponentFixture<Modulo3ColasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo3ColasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo3ColasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
