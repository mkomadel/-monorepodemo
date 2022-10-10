import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DokumenteComponent } from "./dokumente/dokumente.component";


export const routes: Routes = [
    {
        path:'',        
        component: DokumenteComponent
    }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class DokumenteRoutingModule {}