import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
  `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
  `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.groner';

  urlImage: string = 'http://lorempixel.com/400/200/nature/';

  cursoAngular: boolean = true;
  isMouseOver: boolean = false;

  valorAtual: string = '';
  valorSalvo: string = '';

  nome: string = 'Gustavo';

  pessoa: any = {
    nome: 'Gustavo',
    idade: 43
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
