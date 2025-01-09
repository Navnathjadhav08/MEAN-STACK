import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  //Dependency injection of HTTP
  constructor(private http : HttpClient) {   }

  getBatches(){
    //it connects with Node_Express Server

    return this.http.get("http://localhost:5100/getBatches");
  }
}
