import { Component, Input } from "@angular/core";

@Component({
    selector: 'foto',
    templateUrl: './foto.component.html',
    styles:[`
        .card-img-top{
            height: 220px;
            object-fit: cover;
        }
    `]
})

export class FotoComponent{
    //one-way data binding
    //associação de dados unidiecional
    //{{}} angular expression
    
    @Input() titulo = '';
    @Input() url = '';
    @Input() descricao = '';
}