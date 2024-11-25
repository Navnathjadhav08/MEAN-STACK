import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  standalone: true,
  imports: [],
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.css'
})
export class MycomponentComponent {

  public Information : string = " "

  public MyEvent( ){
    console.log("Click button is pressed")
  }

  public AngularEvent(){
    this.Information = "Angular button is pressed"
    console.log("Angular button is pressed")
  }

  public PythonEvent(Value : any){
    console.log("Value")
  }
}
