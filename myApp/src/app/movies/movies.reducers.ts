import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Movie} from './models/movie';
import { MovieActions, MovieActionTypes } from './movies.actions';

export interface MovieState extends EntityState<Movie>{

}

export const adapter:EntityAdapter<Movie> = createEntityAdapter<Movie>();

export const initialMoviesState:MovieState = adapter.getInitialState();

export function movieReducer(state = initialMoviesState, action:MovieActions):MovieState{

    switch(action.type){

        case MovieActionTypes.MovieLoaded:
        
            console.log('----movieReducer----');
            console.log(action.payload.movie);

            var movieEntity = {
                id:Number(action.payload.movie.imdbID.split("tt")[1].substring(1)),
                Title:action.payload.movie.Title,
                Year:action.payload.movie.Year,
                Runtime:action.payload.movie.Runtime,
                Genre:action.payload.movie.Genre,
                Director:action.payload.movie.Director,
                imdbID:action.payload.movie.imdbID
            }
            return adapter.addOne(movieEntity,state)
        default:{
            return state;
        }
    }
       
}

function convertStringToId(str: String){
    let num =  Number(str.split("tt")[1].substring(1));
    return num;
  } 