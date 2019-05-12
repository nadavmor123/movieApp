import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieCardComponent} from './movie-card/movie-card.component';
import {MovieResolver} from './movie.resolver';
const routes: Routes = [

  {
    path:'',
    component:MovieListComponent
  },
  {
    path:':id',
    component: MovieCardComponent,
    resolve: { movie: MovieResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
