import { Component, OnInit } from '@angular/core';
import Utils from '../utils';

@Component({
  selector: 'app-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.scss']
})
export class SmallComponent implements OnInit {

  delayMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // demonstrates the delay() function by displaying a message, waiting 2 seconds, then displaying a different message
  delayDemo() {
    this.delayMessage = 'Waiting...';
    Utils.delay(2000).then(() => this.delayMessage = 'Done!');
  }

  // demonstrates the animateRight() function by sliding a few elements on the page
  animateRightDemo() {
    // bonus: works on any element type
    Utils.animateRight(document.getElementById('slide-div'));
    Utils.animateRight(document.getElementById('slide-p'));
    Utils.animateRight(document.getElementById('slide-label'));
    Utils.animateRight(document.getElementById('slide-input'));
    Utils.animateRight(document.getElementById('slide-iframe'));
    Utils.animateRight(document.getElementById('slide-flex'));
    Utils.animateRight(document.getElementById('slide-svg'));
  }
}
