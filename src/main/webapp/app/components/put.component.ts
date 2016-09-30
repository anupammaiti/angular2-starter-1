import {Component, OnInit} from "@angular/core";
import {ResponseService} from "../services/response.service";
import {Response} from "../dto/response";
import {Request} from "../dto/request";

@Component({
    selector: 'get',
    templateUrl: './app/templates/put.component.html'
})
export class PutComponent implements OnInit{

    private response: Response;

    constructor(
        private responeService: ResponseService
    ){}

    ngOnInit(): void {
        this.put();
    }

    put(): void {
        const REQUEST: Request = { content: 'content' };
        this.responeService.put(REQUEST)
            .then(response => this.response = response);
    }
}
