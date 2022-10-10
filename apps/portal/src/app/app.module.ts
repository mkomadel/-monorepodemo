import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KontenModule } from '@dcb/konten';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, AppRoutingModule, KontenModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
