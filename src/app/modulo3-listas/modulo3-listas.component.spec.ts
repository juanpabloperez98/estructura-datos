import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo3ListasComponent } from './modulo3-listas.component';

describe('Modulo3ListasComponent', () => {
  let component: Modulo3ListasComponent;
  let fixture: ComponentFixture<Modulo3ListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo3ListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo3ListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
