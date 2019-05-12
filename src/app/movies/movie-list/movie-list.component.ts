import { Component, OnInit } from '@angular/core';
import {Thumbnail} from '../models/thumbnail';
import {ApiService} from '../services/api.service';
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies:Thumbnail[];
  config: any;
  collection = { count: 0, data: [] };
 
  constructor(private api:ApiService ,private router:Router , private store:Store<AppState>) { 

    store.subscribe();
  }

  selectMovie(id:String):void{
    this.router.navigate(['/movies/' + id])
  }

  deleteMovie(id:String):void{
    
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
    //this.movies = this.api.getAllThumbnails();
    this.collection.data =  this.api.getAllThumbnails();
    this.collection.count = this.collection.data.length;
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
}
