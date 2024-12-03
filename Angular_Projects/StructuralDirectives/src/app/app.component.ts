import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgifComponent,NgForComponent,NgswitchComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StructuralDirectives';
}
