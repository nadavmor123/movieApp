import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';
import {Observable} from 'rxjs';
import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private api: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any>|Promise<any>|any {
    return this.api.getMovieById(route.params.id);
  }
}