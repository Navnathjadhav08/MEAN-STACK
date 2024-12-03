import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css'
})
export class BatchlistComponent {

  Batches : any = []
  constructor(private batchobj : BatchesService){
      this.Batches = batchobj.getBatches()
  }

}
