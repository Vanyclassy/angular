import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.styl']
})
export class ClickMeComponent implements OnInit {
  counterValue = 0;
  @Output() counterChange = new EventEmitter();

  @Input()
  get counter(): number {
    return this.counterValue;
  }

  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  decrement(): void {
    this.counter--;
  }

  increment(): void {
    this.counter++;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
