import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Movie } from './models/movie';


export enum MovieActionTypes{
    MovieRequested = '[View Movie Page] Movie Requested',
    MovieLoaded = '[Movies API] Movie Loaded',
    MovieUpdated = '[Update Movie] Movie Updated'
}

export class MovieRequested implements Action {

    readonly type = MovieActionTypes.MovieRequested;

    constructor(public payload:{movieId:number}){

    }
}

export class MovieUpdated implements Action {

    readonly type = MovieActionTypes.MovieUpdated;

    constructor(public payload:{movie: Update<Movie>}){

    }
}

export class MovieLoaded implements Action {

    readonly type = MovieActionTypes.MovieLoaded;

    constructor(public payload:{movie:Movie}){

    }
}

export type MovieActions = MovieLoaded | MovieRequested | MovieUpdated;
