import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymeComponent } from './pyme';

describe('Pyme', () => {
  let component: PymeComponent;
  let fixture: ComponentFixture<PymeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PymeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PymeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
