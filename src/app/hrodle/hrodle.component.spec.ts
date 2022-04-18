import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrodleComponent } from './hrodle.component';

describe('HrodleComponent', () => {
  let component: HrodleComponent;
  let fixture: ComponentFixture<HrodleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrodleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
