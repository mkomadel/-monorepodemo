import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KontenComponent } from "@dcb/konten";


export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'konten'
    },
    {
        path:'konten',        
        component: KontenComponent
    },
    {
        path:'dokumente',        
        loadChildren: () =>
        import('@dcb/dokumente').then((m) => m.DokumenteModule),
    },
    {
        path:'karten',        
        loadChildren: () =>
        import('@dcb/karte').then((m) => m.KarteModule),
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}