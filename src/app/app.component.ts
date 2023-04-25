import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';

@Component({
  //Nombre del componente (environment/index.html)
  selector: "app-component",

  //Archivo de Trabajo HTML
  templateUrl: './app.component.html'
})

export class AppComponent {
  public titulo: string = "Mi pagina web";

}
