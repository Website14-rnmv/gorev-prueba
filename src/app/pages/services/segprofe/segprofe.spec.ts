import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segprofe } from './segprofe';

describe('Segprofe', () => {
  let component: Segprofe;
  let fixture: ComponentFixture<Segprofe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Segprofe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segprofe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
