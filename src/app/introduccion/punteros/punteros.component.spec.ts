import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunterosComponent } from './punteros.component';

describe('PunterosComponent', () => {
  let component: PunterosComponent;
  let fixture: ComponentFixture<PunterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
