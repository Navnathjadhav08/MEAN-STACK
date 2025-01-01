import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialdemoComponent } from './materialdemo/materialdemo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialdemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MaterialDesign';
}
