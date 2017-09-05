import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    console.log(this.campoValorInput);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
    //this.valor++;
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
    //this.valor--;
}

  constructor() { }

  ngOnInit() {
  }

}
