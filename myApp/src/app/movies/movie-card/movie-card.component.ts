import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl ,FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit {

  movie:Movie;
  movieForm: FormGroup;
  submitted = false;

  constructor(private api:ApiService ,private route: ActivatedRoute,private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.movie = this.route.snapshot.data.movie; 

    this.movieForm = this.formBuilder.group({
      title: [this.movie.Title, [Validators.required]],
      genre: [this.movie.Genre,[Validators.required]],
      director: [this.movie.Director,[Validators.required]],
  });
  }

  get f() { return this.movieForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.movieForm.invalid) {
          return;
      }
  }
}
