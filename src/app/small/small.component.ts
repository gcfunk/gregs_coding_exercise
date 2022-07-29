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

  // demonstrates the delay() function by displaying a message, waiting 2 seconds, then displaying a different message
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

  // demonstrates the animateRight() function by sliding a few elements on the page
  animateRightDemo() {
    // bonus: works on any element type
    this.animateRight(document.getElementById('slide-div'));
    this.animateRight(document.getElementById('slide-p'));
    this.animateRight(document.getElementById('slide-label'));
    this.animateRight(document.getElementById('slide-input'));
    this.animateRight(document.getElementById('slide-iframe'));
    this.animateRight(document.getElementById('slide-flex'));
    this.animateRight(document.getElementById('slide-svg'));
  }

  // el: element node object
  // moves the element to the right by 100px over a duration of 1 second
  animateRight(el: any) {
    // assumes el is already rendered on the page. If not, we'd have to use appendChild to add it to a container element
  
    /*
    For discussion: animating css transform is the "best" solution here. See small.component.scss for the animation code.
    Pros:
      * small amount of code
      * works in all modern browsers
      * will use the GPU to smooth the animation steps
    Cons:
      * css transform creates a new stacking context, which could cause the sliding element to go over or under other elements
        if it's on a modal or something
      * don't get to use the delay() function from the previous exercise
    */

    const element = (el as HTMLElement);

    // this feels a little hacky. the 'translation' css property doesn't work on elements that are display: inline, so
    // force them to be 'inline-block'
    const style = getComputedStyle(element);
    if (style.display === 'inline') {
      element.classList.add('inline-block');
    }

    // add the animation
    element.classList.add('slide-me');
  }

  // xs: array
  // returns: a new array, with unique items
  removeDuplicates(xs: any) {
    return xs;
  }
}
