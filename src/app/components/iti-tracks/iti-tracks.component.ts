import { Component } from '@angular/core';

@Component({
  selector: 'app-iti-tracks',
  templateUrl: './iti-tracks.component.html',
  styleUrls: ['./iti-tracks.component.css'],
})
export class ItiTracksComponent {
  tracks: string[] = [
    'Open Source',
    'AI',
    'Embedded Systems',
    'Mobile Application',
  ];
  selectedTrack: string = '';
}
