import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  indexOver: number = -1;

  icons = [
    'https://picsum.photos/100/100?random=1',
    'https://picsum.photos/100/100?random=2',
    'https://picsum.photos/100/100?random=3',
    'https://picsum.photos/100/100?random=4',
    'https://picsum.photos/100/100?random=5'
    
  ];

  cells = Array(25)
    .fill(' ')
    .map((_, index) => ({ src: null, id: index }));
  constructor() {}

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer != event.container) {
      if (event.container.data.src !== undefined) { //we are drop on "board"
        if (event.previousContainer.data.src != undefined) { //we are dragging an element of "board"
          event.container.data.src = event.previousContainer.data.src;
          event.previousContainer.data.src = null;
        } else {  //we are dragging an element of "side"
          event.container.data.src = event.previousContainer.data;
        }
      } else {
        if (
          event.container.data.src === undefined &&
          event.previousContainer.data.src !== undefined
        ) //we are drop an img from "board" on the "side"
          event.previousContainer.data.src = null;
      }
    }
  }
}
