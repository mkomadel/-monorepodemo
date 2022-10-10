import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KartenComponent } from "./karten/karten.component";



export const routes: Routes = [
    {
        path:'',        
        component: KartenComponent
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class KarteRoutingModule {}