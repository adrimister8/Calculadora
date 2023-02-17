import { Component } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styles: [
  ]
})
export class CuadradoComponent {

  lado: number = 0;


  calcularArea(): void {
    var area = document.getElementById("area");

    if(area) {
      area.innerHTML += (this.lado*this.lado);
    }

  }

  calcularPerimetro() {
    var perimetro = document.getElementById("perimetro");

    if(perimetro) {
      perimetro.innerHTML += this.lado*4;
    }

  }
}
