import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  title: string = 'Gallary Titile';
  imgSrc: string = 'assets/images/kitchen-g9818d8221_640.jpg';
  index: number = 0;
  images: string[] = [
    'assets/images/kitchen-g9818d8221_640.jpg',
    'assets/images/man-gb17175c36_640.jpg',
    'assets/images/desk-gc6ec274ce_640.jpg',
  ];
  showNext() {
    this.index++;
    if (this.index == this.images.length) {
      this.index = 0;
    }
    this.imgSrc = this.images[this.index];
  }
}
