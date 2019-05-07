import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movie:Movie;
  constructor(private api:ApiService ,private route: ActivatedRoute) {


   }

  ngOnInit() {


    this.route.paramMap.subscribe(params => {
      
      this.movie = {
        Title:this.route.snapshot.data.movie.Title,
        id:params['params']['id'],  
        Year:this.route.snapshot.data.movie.Year,
        Runtime:this.route.snapshot.data.movie.Runtime,
        Genre:this.route.snapshot.data.movie.Genre,
        Director:this.route.snapshot.data.movie.Director,
        Poster:this.route.snapshot.data.movie.Poster
      }

    });
 
  }

}
