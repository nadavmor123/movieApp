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
      {Id:1,Title:"Spider-Man: Homecoming",imdbId:"tt2250912"},
      {Id:4,Title:"Captain America: The First Avenger",imdbId:"tt2250912"},
      {Id:3,Title:"Captain America: The Winter Soldier",imdbId:"tt2250912"},
      {Id:2,Title:"Captain America: Civil War",imdbId:"tt2250912"},
      {Id:5,Title:"The Avengers",imdbId:"tt2250912"},
      {Id:6,Title:"Avengers: Age Of Ultron",imdbId:"tt2250912"},
      {Id:7,Title:"Avengers: Infinity War",imdbId:"tt2250912"},
      {Id:8,Title:"Avengers: Endgame",imdbId:"tt2250912"},
      {Id:9,Title:"Iron Man",imdbId:"tt2250912"},
      {Id:10,Title:"Iron Man 2",imdbId:"tt2250912"},
      {Id:11,Title:"Iron Man 3",imdbId:"tt2250912"},
      {Id:13,Title:"Guardians Of The Galaxy",imdbId:"tt2250912"},
      {Id:12,Title:"Guardians Of The Galaxy vol. 2",imdbId:"tt2250912"},
      {Id:14,Title:"Thor",imdbId:"tt2250912"},
      {Id:15,Title:"Thor: The Dark World",imdbId:"tt2250912"},
      {Id:16,Title:"Thor: Ragnarok",imdbId:"tt2250912"},
      {Id:17,Title:"Doctor Strange",imdbId:"tt2250912"},
      {Id:18,Title:"Captain Marvel",imdbId:"tt2250912"},
      {Id:19,Title:"Black Panther",imdbId:"tt2250912"},
      {Id:20,Title:"Ant-Man",imdbId:"tt2250912"},
      {Id:21,Title:"Ant-Man and the Wasp",imdbId:"tt2250912"},
      {Id:22,Title:"Deadpool",imdbId:"tt2250912"},
      {Id:23,Title:"Deadpool 2",imdbId:"tt2250912"},
    ]
  }

  getMovieById(id):Observable<any>{
    //this.searchTitle = this.getThumbnailTitle(id);
    //this.searchTitle = {Title:"Ant-Man" ,Id:20 };
    //let title = this.getThumbnailTitle(id).Title;

    console.log('api - getMovieById');
    console.log(id);

    let title = this.getThumbnailTitle(id);

    return this.httpClient.get(`${this.apiURL}+${title}`);
  }

  getAllThumbnails():Thumbnail[]{
    return this.movieList;
  }

  getThumbnailTitle(id):String{
    var str = id.toString();
    let title = this.movieList.find(movie=>{
      return movie.imdbId.includes(str);
    });
    return title.Title;
  }



}