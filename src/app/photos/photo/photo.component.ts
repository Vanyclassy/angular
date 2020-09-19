import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.styl']
})
export class PhotoComponent implements OnInit {

  @Input() title: string;
  @Input() src: string;
  x = 5;

  constructor() {
  }

  ngOnInit(): void {
  }

}
