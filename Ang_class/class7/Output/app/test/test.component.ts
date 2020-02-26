import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styles: [``]
})
export class TestComponent implements OnInit {
  
  constructor() {}


  @Output()
  public childEvent = new EventEmitter()

  onButtonClicked(){
    this.childEvent.emit("Data from Child")
  }

  

  ngOnInit(): void {}
}
