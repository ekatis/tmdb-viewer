import {Movie} from './movie';

export interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}
