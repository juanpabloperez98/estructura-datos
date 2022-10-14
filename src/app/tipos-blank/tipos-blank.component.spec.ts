import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposBlankComponent } from './tipos-blank.component';

describe('TiposBlankComponent', () => {
  let component: TiposBlankComponent;
  let fixture: ComponentFixture<TiposBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposBlankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
