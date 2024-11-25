import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demotwowaybinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demotwowaybinding.component.html',
  styleUrl: './demotwowaybinding.component.css'
})
export class DemotwowaybindingComponent {
    public Name = "NJ"

    public Data :string =""
}
