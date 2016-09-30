import {Component, OnInit} from "@angular/core";
import {ResponseService} from "../services/response.service";
import {Response} from "../dto/response";
import {Request} from "../dto/request";

@Component({
    selector: 'get',
    templateUrl: './app/templates/post.component.html'
})
export class PostComponent implements OnInit{

    private response: Response;

    constructor(
        private responeService: ResponseService
    ){}

    ngOnInit(): void {
        this.post();
    }

    post(): void {
        const REQUEST: Request = { content: 'content' };
        this.responeService.post(REQUEST)
            .then(response => this.response = response);
    }
}
