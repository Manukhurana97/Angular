export class TestComponent {

  public addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
  public subNumbers(num1: number, num2: number): number {
    return num1 - num2;
  }

  public Area(num1: number, num2: number): number {
    return num1 * num2;
  }

  public parameter(num1: number, num2: number): number {
    return 2*(num1 * num2);
  }
}
