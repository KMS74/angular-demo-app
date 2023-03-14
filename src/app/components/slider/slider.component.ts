import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  images: string[] = [
    'assets/images/sunset-g12cd7616f_1920.jpg',
    'assets/images/alberta-g399c0a575_1280.jpg',
    'assets/images/tree-g628e91ecb_1280.jpg',
  ];
}
