import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { DokumenteRoutingModule } from './dokumente.routing.module';
//import { KarteModule } from '@dcb/karte';



@NgModule({
  imports: [CommonModule, DokumenteRoutingModule],
  declarations: [DokumenteComponent],
})
export class DokumenteModule {}
