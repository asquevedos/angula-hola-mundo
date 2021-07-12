import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ingreso:String="";
  texto:String="Hola a todos";

  ejemploClick()
  {
   this.ingreso=this.ingreso+"9";
  }

}
