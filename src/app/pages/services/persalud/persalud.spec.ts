import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persalud } from './persalud';

describe('Persalud', () => {
  let component: Persalud;
  let fixture: ComponentFixture<Persalud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persalud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Persalud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
