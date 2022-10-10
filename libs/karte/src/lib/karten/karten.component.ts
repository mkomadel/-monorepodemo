import { Component, OnInit } from '@angular/core';
import {TimeService} from '@dcb/common'

@Component({
  selector: 'dcb-karten',
  templateUrl: './karten.component.html',
  styleUrls: ['./karten.component.scss'],
})
export class KartenComponent implements OnInit {

  constructor(private timeService: TimeService ) {}

  ngOnInit(): void {}

  getTime(){
    return this.timeService.getTime();
  }
}
