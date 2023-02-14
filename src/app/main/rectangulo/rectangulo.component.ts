import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangulo',
  templateUrl: './rectangulo.component.html',
  styles: [
  ]
})
export class RectanguloComponent {

  base: number = 0;
  altura: number = 0;

  calcularArea(): void {
    var area = document.getElementById("area"); 

    if(area) {
      area.innerHTML += (this.base*this.altura);
    }
     
  }

  calcularPerimetro() {
    var perimetro = document.getElementById("perimetro"); 

    if(perimetro) {
      perimetro.innerHTML += this.base*2 + this.altura*2;
    }
     
  }
}
