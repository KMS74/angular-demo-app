import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count: number = 0;
  increment(): void {
    this.count += 1;
  }
  decrement(): void {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
}
