import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Thumbnail } from '../models/thumbnail';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  
  apiURL: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=3876f192&t=';
  searchTitle:Thumbnail;
  movieList: Thumbnail[]; 

  constructor(private httpClient: HttpClient) {

    this.movieList = [
      {Id:1,Title:"The Avengers"},
      {Id:2,Title:"Captain America: The Winter Soldier"},
      {Id:3,Title:"Captain America: The First Avenger"},
      {Id:4,Title:"Captain America: Civil War"},
      {Id:5,Title:"Avengers: Endgame"},
      {Id:6,Title:"Avengers: Age Of Ultron"},
      {Id:7,Title:"Avengers: Infinty War"},
      {Id:8,Title:"Avengers: Endgame"},
      {Id:9,Title:"Iron Man"},
      {Id:10,Title:"Iron Man 2"},
      {Id:11,Title:"Iron Man 3"},
      {Id:12,Title:"Gardians Of The Galaxy"},
      {Id:13,Title:"Gardians Of The Galaxy vol. 2"},
      {Id:14,Title:"Thor"},
      {Id:15,Title:"Thor: The Dark World"},
      {Id:16,Title:"Thor: Ragnarok"},
      {Id:17,Title:"Doctor Strange"},
      {Id:18,Title:"Captain Marvel"},
    ]
  }

  getMovieById(id):Observable<any>{
    this.searchTitle = this.getThumbnailTitle(id);
    return this.httpClient.get(`${this.apiURL}+${this.searchTitle.Title}`);
  }

  getThumbnailTitle(id){

    let title = this.movieList.find(movie=>{
      return movie.Id == id;
    });
    return title;
  }



}