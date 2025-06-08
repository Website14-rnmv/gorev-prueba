import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinsolComponent } from './reinsol';

describe('Reinsol', () => {
  let component: ReinsolComponent;
  let fixture: ComponentFixture<ReinsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReinsolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
