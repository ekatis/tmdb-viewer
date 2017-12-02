import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  currentPage = 1;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

  nextPage() {
    this.currentPage += 1;
    this.getMovies();
  }

  previousPage() {
    this.currentPage -= 1;
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMovies(this.currentPage)
      .subscribe((response) => {
        this.movies = response.results;
        this.currentPage = response.page;
      });
  }

}
