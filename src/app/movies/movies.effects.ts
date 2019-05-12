import {Injectable} from '@angular/core';
import { Effect,Actions, ofType } from '@ngrx/effects';
import { MovieActionTypes ,MovieRequested , MovieLoaded} from './movies.actions';
import { ApiService} from './services/api.service';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class MovieEffects{

    @Effect()
    loadMovie$ = this.actions$.pipe(
        ofType<MovieRequested>(MovieActionTypes.MovieRequested),
        mergeMap(action=>this.api.getMovieById(action.payload.movieId)),
        map(movie=> new MovieLoaded({movie}))
    );

    constructor(private actions$:Actions , private api:ApiService){

    }
}
