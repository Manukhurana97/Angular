import {Component, NgModule, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart;

  total = 0;

  count = 0;


  constructor() {}

  deleteall() {
    localStorage.clear();
  }

  deleteitem(item) {
    console.log(item);
    localStorage.removeItem(item.catId);
  }

  ngOnInit(): void {
  this.cart = JSON.parse(localStorage.getItem('Basket'));
  for (const price of this.cart) {
    this.total += price.price;
    this.count += 1;

  }
  }

}
