import { Component, OnInit } from '@angular/core';
import { TimeService } from '@dcb/common';

@Component({
  selector: 'dcb-dokumente',
  templateUrl: './dokumente.component.html',
  styleUrls: ['./dokumente.component.scss'],
})
export class DokumenteComponent implements OnInit {
  constructor(private timeService: TimeService ) {}

  ngOnInit(): void {}

  getTime(){
    return this.timeService.getTime();
  }
}
