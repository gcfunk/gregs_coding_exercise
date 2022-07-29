import { Component, OnInit } from '@angular/core';

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

  // demonstrates the delay function by displaying a message, waiting 2 seconds, then displaying a different message
  delayDemo() {
    this.delayMessage = 'Waiting...';
    this.delay(2000).then(() => this.delayMessage = 'Done!');
  }

  // ms: number of milliseconds
  // returns a Promise that is resolved after ms milliseconds
  delay(ms: any) {
    // defensive code - if the parameter isn't a number, wait 0 milliseconds
    // so the promise still resolves and doesn't block code execution
    let msToWait = (typeof ms === 'number') ? ms : 0;

    // borrowed from https://javascript.info/task/delay-promise
    // skill demonstrated - copy/paste code from the internet
    // For discussion: rxjs is the spiritual succesor to promises. In the real world I'd use an observable here
    return new Promise(resolve => setTimeout(resolve, msToWait));
  }

  // el: element node object
  // moves the element to the right by 100px over a duration of 1 second
  animateRight(el: any) {
  }

  // xs: array
  // returns: a new array, with unique items
  removeDuplicates(xs: any) {
  }
}
