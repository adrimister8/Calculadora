import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styles: [
  ]
})
export class TrianguloComponent {

  base: number = 0;
  altura: number = 0;
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;

  calcularArea(): void {
    var area = document.getElementById("area"); 

    if(area) {
      area.innerHTML += (this.base*this.altura)/2;
    }
     
  }

  calcularPerimetro() {
    var perimetro = document.getElementById("perimetro"); 

    if(perimetro) {
      perimetro.innerHTML += this.lado1+this.lado2+this.lado3;
    }
     
  }
}
