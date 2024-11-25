import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationConceptComponent } from './interpolation-concept.component';

describe('InterpolationConceptComponent', () => {
  let component: InterpolationConceptComponent;
  let fixture: ComponentFixture<InterpolationConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
