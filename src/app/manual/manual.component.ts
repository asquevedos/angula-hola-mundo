import { Component } from "@angular/core";
import { Persona } from "../models/Persona";

@Component({
selector:"app-manual",
templateUrl:"./manual.component.html"
})
export class ManualComponent{

  persona: Persona=new Persona();
  personas:Persona[]=[];

  agregarPersona()
  {
    this.personas.push(this.persona);
    this.persona=new Persona();
  }


}
