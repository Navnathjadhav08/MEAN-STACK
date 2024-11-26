import { Component,EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  //creat a object for event class
  @Output() public MyEvent = new EventEmitter();

  //Action listener for button
  public SendEvent() {
    //sending event to parent
    this.MyEvent.emit('Hello from child');
  }
}
