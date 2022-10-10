import { Component, OnInit } from '@angular/core';
import { TimeService } from '@dcb/common';

@Component({
  selector: 'dcb-konten',
  templateUrl: './konten.component.html',
  styleUrls: ['./konten.component.scss'],
})
export class KontenComponent implements OnInit {
  constructor(private timeService: TimeService) {}

  ngOnInit(): void {}

  getTime(){
    return this.timeService.getTime();
  }
}
