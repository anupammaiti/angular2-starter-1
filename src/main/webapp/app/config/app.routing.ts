import {Routes, RouterModule} from "@angular/router";
import {GetComponent} from "../components/get.component";
import {ModuleWithProviders} from "@angular/core";
import {PostComponent} from "../components/post.component";
import {PutComponent} from "../components/put.component";
import {DeleteComponent} from "../components/delete.component";

const appRoutes: Routes = [
    {
        path: '',
        component: GetComponent
    },
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'put',
        component: PutComponent
    },
    {
        path: 'delete',
        component: DeleteComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);