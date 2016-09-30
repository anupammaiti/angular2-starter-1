import {Component, OnInit} from "@angular/core";
import {ResponseService} from "../services/response.service";
import {Response} from "../dto/response";

@Component({
    selector: 'get',
    templateUrl: './app/templates/get.component.html'
})
export class GetComponent implements OnInit{

    private response: Response;

    constructor(
        private responeService: ResponseService
    ){}

    ngOnInit(): void {
        this.get();
    }

    get(): void {
        this.responeService.get()
            .then(response => this.response = response);
    }
}
