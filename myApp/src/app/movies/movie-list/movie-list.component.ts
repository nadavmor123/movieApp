import { Component, OnInit } from '@angular/core';
import {Thumbnail} from '../models/thumbnail';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:Thumbnail[];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.movies = this.api.getAllThumbnails();
  }

}
