import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio03';

  obrigatorio: boolean = true
  valorInput: number = 0


  constructor() {}
   
    incrementa() {
      this.valorInput++;
    }

    decrementa() {
      this.valorInput--;
    }
}
