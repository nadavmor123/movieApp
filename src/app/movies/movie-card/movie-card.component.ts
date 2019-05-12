import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl ,FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { MovieUpdated } from '../movies.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

  movie:Movie;
  movieForm: FormGroup;
  submitted = false;

  constructor(private api:ApiService ,private route: ActivatedRoute,private formBuilder: FormBuilder,private store:Store<AppState>) {}

  ngOnInit() {

    this.movie = this.route.snapshot.data.movie; 

    this.movieForm = this.formBuilder.group({
      title: [this.movie.Title, [Validators.required]],
      genre: [this.movie.Genre,[Validators.required]],
      director: [this.movie.Director,[Validators.required]],
  });
  }

  public convertStringToId(str){
    let num =  Number(str.split("tt")[1].substring(1));
    return num;
  } 

  get f() { return this.movieForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.movieForm.invalid) {
          return;
      }

        /*using rxjs Udpate class to represent the changes made to the movie date*/
      const movie : Update<Movie> = {
        id:this.convertStringToId(this.movie.imdbID),
        changes:{
          Genre:this.movieForm.value.genre,
          Director:this.movieForm.value.director
        }
      }

      /*after we update the non-existing DB - we save the new state in store*/
      this.store.dispatch(new MovieUpdated({movie:movie}))
  }
}
