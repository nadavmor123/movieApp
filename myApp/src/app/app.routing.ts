import {NgModule} from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes : Routes = [
    {
        path: 'movies',
        loadChildren: './movies/movies.module#MoviesModule'
      }, 
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}