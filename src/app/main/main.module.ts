import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { RectanguloComponent } from './rectangulo/rectangulo.component';
import { CirculoComponent } from './circulo/circulo.component';
import { PentagonoComponent } from './pentagono/pentagono.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { HexagonoComponent } from './hexagono/hexagono.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TrianguloComponent,
    RectanguloComponent,
    CirculoComponent,
    PentagonoComponent,
    CuadradoComponent,
    HexagonoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TrianguloComponent,
    CirculoComponent,
    RectanguloComponent
  ]
})
export class MainModule { }
