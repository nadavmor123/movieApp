import { Action } from '@ngrx/store';
import { Movie } from './models/movie';

export enum MovieActionTypes{

    MovieRequested = '[View Movie Page] Movie Requested',
    MovieLoaded = '[Movies API] Movie Loaded'
}

export class MovieRequested implements Action {

    readonly type = MovieActionTypes.MovieRequested;

    constructor(public payload:{movieId:number}){

    }
}

export class MovieLoaded implements Action {

    readonly type = MovieActionTypes.MovieLoaded;

    constructor(public payload:{movie:Movie}){

    }
}

export type MovieActions = MovieLoaded | MovieRequested;