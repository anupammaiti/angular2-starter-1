import {Component, OnInit} from '@angular/core';
import {enableProdMode} from '@angular/core';
import {ResponseService} from "../services/response.service";
import {Response} from "../dto/Response";

//enableProdMode();

@Component({
    selector: 'app',
    templateUrl: './app/templates/app.component.html'
})
export class AppComponent implements OnInit{

    private response: Response;

    constructor(
        private responeService: ResponseService
    ){}

    ngOnInit(): void {
        this.getResponse();
    }

    getResponse(): void {
        this.responeService.getResponse()
            .then(response => this.response = response);
    }
}
