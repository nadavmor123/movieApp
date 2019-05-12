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
      {Id:4,Title:"Captain America: The First Avenger",imdbId:"tt0458339"},
      {Id:3,Title:"Captain America: The Winter Soldier",imdbId:"tt1843866"},
      {Id:2,Title:"Captain America: Civil War",imdbId:"tt3498820"},
      {Id:5,Title:"The Avengers",imdbId:"tt0848228"},
      {Id:6,Title:"Avengers: Age Of Ultron",imdbId:"tt2395427"},
      {Id:7,Title:"Avengers: Infinity War",imdbId:"tt4154756"},
      {Id:8,Title:"Avengers: Endgame",imdbId:"tt4154796"},
      {Id:9,Title:"Iron Man",imdbId:"tt0371746"},
      {Id:10,Title:"Iron Man 2",imdbId:"tt1228705"},
      {Id:11,Title:"Iron Man 3",imdbId:"tt1300854"},
      {Id:13,Title:"Guardians Of The Galaxy",imdbId:"tt2015381"},
      {Id:12,Title:"Guardians Of The Galaxy vol. 2",imdbId:"tt3896198"},
      {Id:14,Title:"Thor",imdbId:"tt0800369"},
      {Id:15,Title:"Thor: The Dark World",imdbId:"tt1981115"},
      {Id:16,Title:"Thor: Ragnarok",imdbId:"tt3501632"},
      {Id:17,Title:"Doctor Strange",imdbId:"tt1211837"},
      {Id:18,Title:"Captain Marvel",imdbId:"tt4154664"},
      {Id:19,Title:"Black Panther",imdbId:"tt1825683"},
      {Id:20,Title:"Ant-Man",imdbId:"tt0478970"},
      {Id:21,Title:"Ant-Man and the Wasp",imdbId:"tt5095030"},
      {Id:22,Title:"Deadpool",imdbId:"tt1431045"},
      {Id:23,Title:"Deadpool 2",imdbId:"tt5463162"},
    ]
  }

  getMovieById(id):Observable<any>{
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