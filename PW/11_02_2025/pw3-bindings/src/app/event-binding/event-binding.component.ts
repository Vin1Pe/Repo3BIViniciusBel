import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  exibirTexto: boolean = false;
  mtxt(){
    this.exibirTexto = !this.exibirTexto
  }
  alertar(){
    alert("Hoje está calor, cuidado com as chuvas!")
  }
}
