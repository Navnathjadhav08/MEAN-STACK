import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { version } from 'os';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InbuildPipes';

  today =new Date()

  message = "Hello world"

  data = {tech : 'angular' , version : 16}

  no =34.56;

  rate = 0.85


}
