import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { batches } from './batches';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  private url = "/assets/Data/BatchesData.json";
  constructor(private http : HttpClient) { }

  public GetBatches() : Observable<batches[]>
  {
    
    return this.http.get<batches[]>(this.url);
  }
}
