import { Component, OnInit } from '@angular/core';
import {Thumbnail} from '../models/thumbnail';
import {ApiService} from '../services/api.service';
import {Router} from "@angular/router"

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:Thumbnail[];
  constructor(private api:ApiService ,private router:Router) { }

  selectMovie(id:Number):void{

    console.log(id);
    this.router.navigate(['/movies/' + id])
  }


  ngOnInit() {
    this.movies = this.api.getAllThumbnails();
  }

}
