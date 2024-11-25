import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-interpolation-concept',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-concept.component.html',
  styleUrl: './interpolation-concept.component.css'
})
export class InterpolationConceptComponent {
    BatchName = "Angular";

    Display(){
      console.log("Inside a Display Function")
    }
}
