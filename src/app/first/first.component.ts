import {Component, OnInit} from '@angular/core';
import {TestService} from '../service/test.service';

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
    this.testService.gePhoto()
      .subscribe(response => this.data = response);
  }

}
