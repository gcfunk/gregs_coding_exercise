export default class Utils {
  // ms: number of milliseconds
  // returns a Promise that is resolved after ms milliseconds
  static delay(ms: any) {
    // defensive code - if the parameter isn't a number, wait 0 milliseconds
    // so the promise still resolves and doesn't block code execution
    let msAsNumber = new Number(ms);
    let msToWait = parseInt(msAsNumber.toFixed(0));
    if (isNaN(msToWait)) {
      msToWait = 0;
    }

    // borrowed from https://javascript.info/task/delay-promise
    // skill demonstrated - copy/paste code from the internet
    // For discussion: rxjs is the spiritual succesor to promises. In the real world I'd use an observable here
    return new Promise(resolve => setTimeout(resolve, msToWait));
  }

  // el: element node object
  // moves the element to the right by 100px over a duration of 1 second
  static animateRight(el: any) {
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
  static removeDuplicates(xs: Array<any>) {
    return xs.filter((value, index, self) => {
      // if value is the first of itself, return true (keep), else false (remove)
      return self.indexOf(value) === index;
    });

    /*
    For discussion: this solutions works for the simplest use case of a 1 dimensional array of primatives.
    Some things to consider for a more robust solution:
    1. Nested arrays
    2. === vs ==
    3. handling of undefined, null, and NaN
    4. Complex objects as array elements
    5. Will be slow for large arrays (order n^2 time I think)

    There's lots of churn on posts like this https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    
    WAIT, HASHMAP. I'D USE A HASHMAP!!!!
    */
  }
}