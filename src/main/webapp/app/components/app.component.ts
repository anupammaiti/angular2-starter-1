import {Component, OnInit} from '@angular/core';
import {enableProdMode} from '@angular/core';
import {ResponseService} from "../services/response.service";
import {Response} from "../dto/response";

//enableProdMode();

@Component({
    selector: 'app',
    templateUrl: './app/templates/app.component.html'
})
export class AppComponent implements OnInit{

    constructor(
    ){}

    ngOnInit(): void {
    }
}
