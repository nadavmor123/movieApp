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
    this.router.navigate(['/' + id])
  }

  deleteMovie(id:String):void{
      var index = this.collection.data.findIndex((movie)=>{
          return movie.imdbId == id;
      });

      this.collection.data.splice(index,1);
      this.initPagingData(this.collection.data);
  }

  pageChanged(event):void{
    this.config.currentPage = event;
  }

  initPagingData(collectionData):void{
    this.collection.data = collectionData;
    this.collection.count = collectionData.length;
    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  ngOnInit() {
    this.initPagingData(this.api.getAllThumbnails());
  }
}
