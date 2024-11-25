import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationConceptComponent } from './interpolation-concept/interpolation-concept.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InterpolationConceptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Myproject';
}
