import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batches-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batches-details.component.html',
  styleUrl: './batches-details.component.css'
})
export class BatchesDetailsComponent {

  public batches : any = [];

  public constructor(private sobj : BatchesService){
    sobj.GetBatches().subscribe(data => this.batches = data)
  }

}
