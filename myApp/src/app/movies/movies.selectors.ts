import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MovieState} from './movies.reducers';

export const SelectMovieState = createFeatureSelector<MovieState>("movies");

export const SelectMovieById = (movieId:number) => createSelector(
    SelectMovieState,
    movieState => movieState.entities[movieId]
);

