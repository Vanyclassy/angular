import {Component, OnInit} from '@angular/core';
import {IPhoto, TestService} from '../service/test.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.styl']
})
export class FirstComponent implements OnInit {

  constructor(private testService: TestService) {
  }

  data;

  ngOnInit(): void {
    this.testService.getPhoto()
      .subscribe(response => this.data = response);
  }

}
