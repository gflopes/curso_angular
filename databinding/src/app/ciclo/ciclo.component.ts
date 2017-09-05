import { Component, 
         OnInit, 
         OnDestroy, 
         OnChanges,                     
         DoCheck, 
         AfterContentInit, 
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnDestroy, OnChanges,
                                DoCheck, AfterContentInit, AfterContentChecked,
                                AfterViewInit, AfterViewChecked {

  @Input() valorInicial: number = 10;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
    
  }

  ngOnChanges() {
    this.log('ngOnChanges');
    
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
