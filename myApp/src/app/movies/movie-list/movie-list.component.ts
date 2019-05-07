import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
