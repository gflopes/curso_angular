import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent implements OnInit {

  @Input('nome') nomeDoCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
