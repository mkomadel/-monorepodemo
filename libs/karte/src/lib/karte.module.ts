import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KartenComponent } from './karten/karten.component';
import { KarteRoutingModule } from './karte.routing.module';

@NgModule({
  imports: [CommonModule, KarteRoutingModule],
  declarations: [KartenComponent],
})
export class KarteModule {}
