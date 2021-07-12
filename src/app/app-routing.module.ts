import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { ProductoComponent } from './producto/producto.component';
import { ManualComponent } from './manual/manual.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'dinamico-component', component: DinamicoComponent },
  { path: 'producto-component', component: ProductoComponent },
  { path: 'manual-component', component: ManualComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
