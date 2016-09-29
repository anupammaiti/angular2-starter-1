import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from '../components/app.component';

import {ResponseService}  from '../services/response.service';
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent
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
