import { CirculoComponent } from './main/circulo/circulo.component';
import { CuadradoComponent } from './main/cuadrado/cuadrado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrianguloComponent } from './main/triangulo/triangulo.component';
import { RectanguloComponent } from './main/rectangulo/rectangulo.component';
import { PentagonoComponent } from './main/pentagono/pentagono.component';
import { HexagonoComponent } from './main/hexagono/hexagono.component';

const routes: Routes = [
  { path: 'triangulo', component: TrianguloComponent },
  { path: 'rectangulo', component: RectanguloComponent },
  { path: 'cuadrado', component: CuadradoComponent },
  { path: 'circulo', component: CirculoComponent },
  { path: 'pentagono', component: PentagonoComponent },
  { path: 'hexagono', component: HexagonoComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
