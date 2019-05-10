import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {Movie} from './models/movie';

export interface MovieState extends EntityState<Movie>{

}

export const adapter:EntityAdapter<Movie> = createEntityAdapter<Movie>();