import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';
import {Observable} from 'rxjs';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../movies/reducers';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SelectMovieById } from './movies.selectors';
import { MovieRequested } from './movies.actions';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private api: ApiService, private store:Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any>{
    
    const movieId = this.convertStringToId(route.params.id);
   
    return this.store.pipe(
      select(
        SelectMovieById(movieId)
       ),
       tap(movie=>{
         if(!movie){
           this.store.dispatch( new MovieRequested({movieId:movieId}))
         }
       }),
       filter(movie => !!movie),
       first()
    )

  }

  public convertStringToId(str){
    let num =  Number(str.split("tt")[1].substring(1));
    return num;
  } 
}

