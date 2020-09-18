import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.styl']
})
export class SecondComponent implements OnInit {
  counterValue = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
