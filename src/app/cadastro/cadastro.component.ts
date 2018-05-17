import { Component, OnInit } from '@angular/core';
import { FotoComponent } from "../foto/foto.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto = new FotoComponent()

  constructor(private conexaoApi: HttpClient) {  }

  ngOnInit() { }

  salvar(){

    let cabecalho = new HttpHeaders({'Content-Type':'application/json'});
 

    this.conexaoApi.post(
                  'http://localhost:3000/v1/fotos'
                  ,this.foto  
                  ,{
                    headers: cabecalho
                  }
                  )
                  .subscribe(
                    resposta => console.log(resposta)
                    ,erro => console.log(erro)
                  )
  }

}
