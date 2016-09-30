import {Component, OnInit} from "@angular/core";
import {ResponseService} from "../services/response.service";
import {Response} from "../dto/response";

@Component({
    selector: 'get',
    templateUrl: './app/templates/delete.component.html'
})
export class DeleteComponent implements OnInit{

    private response: Response;

    constructor(
        private responeService: ResponseService
    ){}

    ngOnInit(): void {
        this.delete(1);
    }

    delete(id: number): void {
        this.responeService.delete(id)
            .then(response => this.response = response);
    }
}
