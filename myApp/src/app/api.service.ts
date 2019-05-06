import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';


export class ApiService {
  apiURL: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=3876f192&t=';

  constructor(private httpClient: HttpClient) {}

  getMovieById(id){



  }



}