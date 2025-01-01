import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batches-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batches-list.component.html',
  styleUrl: './batches-list.component.css'
})
export class BatchesListComponent {

  public batches : any =[];

  public constructor(private sobj : BatchesService){
    sobj.GetBatches().subscribe(data => this.batches = data);
  }

}
