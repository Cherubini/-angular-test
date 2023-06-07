import { Component } from '@angular/core';
import { ElaborationService } from '../service/elaboration.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  //console.log(this.fromStringToArrayOfNumbers('pippo 1234 5'));

  constructor(private elaborateServ: ElaborationService){

    console.log(this.elaborateServ.fromStringToArrayOfNumbers('1 2 3 4 5 88 77 698 5 6 7 8'));
    console.log(this.elaborateServ.filterAnomalies(this.elaborateServ.fromStringToArrayOfNumbers('1 2 3 4 5 88 77 698 5 6 7 8'), 9, 2));

  }
}
