import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieEffects } from './movies.effects';

import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule,Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { movieReducer } from './movies.reducers';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature('movies',movieReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forFeature([MovieEffects]),
    NgxPaginationModule
  ],
  providers: [
    Store 
  ],
  declarations: [MovieListComponent, MovieCardComponent]
})
export class MoviesModule { }
