import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MypPipe } from './myp.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MypPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomPipes';
}
