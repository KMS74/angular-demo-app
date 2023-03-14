import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() count: number = 0;
  increment(): void {
    this.count += 1;
  }
  decrement(): void {
    if (this.count > 0) {
      this.count -= 1;
    }
  }
}
