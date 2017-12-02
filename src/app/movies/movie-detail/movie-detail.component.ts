import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../movie';
import {AppSettings} from '../../app.settings';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

  imageUrl(filePath: string) {
    return `${AppSettings.IMAGES_BASE_URL}/${AppSettings.IMAGES_SIZE}/${filePath}`;
  }

}
