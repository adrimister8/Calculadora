import { Component } from '@angular/core';

@Component({
  selector: 'app-hexagono',
  templateUrl: './hexagono.component.html',
  styles: [
  ]
})
export class HexagonoComponent {

  lado: number = 0;
  apotema: number = 0;

  calcularArea(): void {
    var area = document.getElementById("area"); 



    if(area) {
      area.innerHTML += (this.lado*6*this.apotema/2);
    }
     
  }

  calcularPerimetro() {
    var perimetro = document.getElementById("perimetro"); 

    

    if(perimetro) {
      perimetro.innerHTML += this.lado*6;
    }
     
  }

}
