import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsTasksComponent } from './staffs-tasks.component';

describe('StaffsTasksComponent', () => {
  let component: StaffsTasksComponent;
  let fixture: ComponentFixture<StaffsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffsTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
