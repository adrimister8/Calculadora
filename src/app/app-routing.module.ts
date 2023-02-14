import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrianguloComponent } from './main/triangulo/triangulo.component';
import { RectanguloComponent } from './main/rectangulo/rectangulo.component';

const routes: Routes = [
  { path: 'triangulo', component: TrianguloComponent },
  { path: 'rectangulo', component: RectanguloComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
