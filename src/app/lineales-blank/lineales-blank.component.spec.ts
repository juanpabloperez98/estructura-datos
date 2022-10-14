import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealesBlankComponent } from './lineales-blank.component';

describe('LinealesBlankComponent', () => {
  let component: LinealesBlankComponent;
  let fixture: ComponentFixture<LinealesBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealesBlankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinealesBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
