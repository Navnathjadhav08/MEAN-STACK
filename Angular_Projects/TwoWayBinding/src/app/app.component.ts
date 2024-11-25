import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemotwowaybindingComponent } from './demotwowaybinding/demotwowaybinding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DemotwowaybindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TwoWayBinding';
}
