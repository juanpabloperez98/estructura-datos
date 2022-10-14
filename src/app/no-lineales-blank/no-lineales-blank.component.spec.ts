import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLinealesBlankComponent } from './no-lineales-blank.component';

describe('NoLinealesBlankComponent', () => {
  let component: NoLinealesBlankComponent;
  let fixture: ComponentFixture<NoLinealesBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLinealesBlankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLinealesBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
