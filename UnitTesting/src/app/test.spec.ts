import {TestComponent} from './test.component';

// tslint:disable-next-line:only-arrow-functions

// tslint:disable-next-line:only-arrow-functions
describe('testing class', function() {
  // tslint:disable-next-line:only-arrow-functions
  it('add Check ', function() {

    // Creating a object of the class which function we want to test

    const cal = new TestComponent();

    const actual = cal.addNumbers(10, 20);

    const expectedResult = 30;
    expect(actual).toBe(expectedResult);
  });

  // tslint:disable-next-line:only-arrow-functions
  it('Sub check ', function () {
    // Creating a object of the class which function we want to test

    const cal = new TestComponent();

    const actual = cal.subNumbers(20, 10);

    const expectedResult = 10;
    expect(actual).toBe(expectedResult);
  });

  // tslint:disable-next-line:only-arrow-functions
  it('area ', function() {
    const area = new TestComponent();

    const actual = area.Area(10, 20);

    const expected = 200;

    expect(actual).toBe(expected);

  });

  // tslint:disable-next-line:only-arrow-functions
  it('parameter', function() {
    const parater = new TestComponent();

    const actual = parater.parameter(10, 20);
    const expected = 400;
    expect(actual).toBe(expected);

  })

});
