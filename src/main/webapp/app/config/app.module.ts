import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from '../components/app.component';

import {ResponseService}  from '../services/response.service';
import {HttpModule} from "@angular/http";
import {GetComponent} from "../components/get.component";
import {routing} from "./app.routing";
import {PostComponent} from "../components/post.component";
import {PutComponent} from "../components/put.component";
import {DeleteComponent} from "../components/delete.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        GetComponent,
        PostComponent,
        PutComponent,
        DeleteComponent
    ],
    providers: [
        ResponseService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
