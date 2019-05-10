import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';
import {Observable} from 'rxjs';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../movies/reducers';

import { ActivatedRouteSnapshot } from '@angular/router';
import { SelectMovieById } from './movies.selectors';
import { MovieRequested } from './movies.actions';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private api: ApiService,state:RouterStateSnapshot, private store:Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any>{
    
    //return this.api.getMovieById(route.params.id);
    const movieId = route.params.id;
    return this.store.pipe(
      select(
        SelectMovieById(movieId)),
        tap(movie=>{
          if(!movie){
            this.store.dispatch(new MovieRequested({movieId}))
          }
        }),
        filter(movie => !!movie),
        first()

    )

  }
}