import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import {Observable} from 'rxjs';
import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any>|Promise<any>|any {
    return this.apiService.getMovieById(route.params.id);
  }
}