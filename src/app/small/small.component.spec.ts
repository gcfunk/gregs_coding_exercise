import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmallComponent } from './small.component';
import Utils from '../utils';

describe('SmallComponent', () => {
  let component: SmallComponent;
  let fixture: ComponentFixture<SmallComponent>;
  const compareArrays = (first: Array<any>, second: Array<any>) => {
    // This comparision function only considers strict equality of the elements
    // something more complex would be needed for objects, nested arrays, etc
    if (first.length !== second.length) {
      return false;
    }
    let ret = true;
    for(let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        ret = false;
      }
    }
    return ret;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('removeDuplicates function', () => {
    it('removes duplicates', () => {
      const original = [1, 1, 2];
      const unique = [1, 2];
      expect(compareArrays(Utils.removeDuplicates(original), unique)).toEqual(true);
    });

    it('doesnt remove unique values', () => {
      expect(Utils.removeDuplicates([1,2]).length).toEqual(2);
    });

    it('works for mixed data types', () => {
      const original = [1, 1, '1', '1', true, true];
      const unique = [1, '1', true];
      expect(compareArrays(Utils.removeDuplicates(original), unique)).toEqual(true);
    });

    it('works for complex data types', () => {
      // this test intentionally fails to demonstrate the limitations of the current solution
      const original = [{x: 1}, {x: 1}];
      const unique = [{x: 1}];
      expect(compareArrays(Utils.removeDuplicates(original), unique)).toEqual(true);
    });
  });
});
