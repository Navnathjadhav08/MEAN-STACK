import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';

@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent {

  public Batches : any = []

  constructor(private batchobj : BatchesService){
    this.Batches = batchobj.getBatches()
  }
}
