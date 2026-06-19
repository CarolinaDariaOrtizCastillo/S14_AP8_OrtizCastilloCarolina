import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postventa } from './postventa';

describe('Postventa', () => {
  let component: Postventa;
  let fixture: ComponentFixture<Postventa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Postventa],
    }).compileComponents();

    fixture = TestBed.createComponent(Postventa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
