import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';

  listaFotos;

//injecao de dependencia fazendo inferencia de tipo
  constructor(conexaoApi:HttpClient){

    
    conexaoApi.get("http://localhost:3000/v1/fotos")
              .subscribe( //arrow function
                resposta => this.listaFotos = resposta
              )

  }

  ngOnInit() {
  }

}
