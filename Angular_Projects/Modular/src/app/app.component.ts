import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaffsTasksComponent } from './staff/staffs-tasks/staffs-tasks.component';
import { AdminTasksComponent } from './admin/admin-tasks/admin-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StaffsTasksComponent,AdminTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Modular';
}
