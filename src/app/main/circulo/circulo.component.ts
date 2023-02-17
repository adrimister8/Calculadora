import { Component } from '@angular/core';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styles: [
  ]
})
export class CirculoComponent {

  radio: number = 0;


  calcularArea(): void {
    var area = document.getElementById("area");

    if(area) {
      area.innerHTML += (Math.PI*Math.pow(this.radio,2));
    }

  }

  calcularPerimetro() {
    var perimetro = document.getElementById("perimetro");

    if(perimetro) {
      perimetro.innerHTML += 2*Math.PI*this.radio;
    }

  }
}
