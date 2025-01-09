import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Client';
  message : any;
  constructor(private service : MyService){}

  //this method automatically called when the component gets created
  ngOnInit(): void {
    this.service.getBatches().subscribe(data=> {
      this.message =data;
    })
  }


}
