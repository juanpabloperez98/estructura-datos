import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentacionBinariaComponent } from './representacion-binaria.component';

describe('RepresentacionBinariaComponent', () => {
  let component: RepresentacionBinariaComponent;
  let fixture: ComponentFixture<RepresentacionBinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentacionBinariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentacionBinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
