import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MycomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventBinding';
}
