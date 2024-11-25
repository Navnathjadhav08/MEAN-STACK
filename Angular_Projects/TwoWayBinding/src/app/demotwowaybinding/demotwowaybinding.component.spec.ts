import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotwowaybindingComponent } from './demotwowaybinding.component';

describe('DemotwowaybindingComponent', () => {
  let component: DemotwowaybindingComponent;
  let fixture: ComponentFixture<DemotwowaybindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemotwowaybindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemotwowaybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
