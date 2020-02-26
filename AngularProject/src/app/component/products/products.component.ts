import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  subcategory: any;
  products: any;
  private catId: any;

  constructor(private dataService: DataService , private route: ActivatedRoute , private  router: Router) {
    this.catId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.dataService.getSubcategories(this.catId).subscribe(d => this.subcategory = d.data);
    this.dataService.getproducts(this.catId).subscribe(d => this.products = d.data);

  }


  addtocart(product) {
    // Basket is key
    if (localStorage.Basket === undefined) {
      const cartitems = [];
      cartitems.push(product);
      localStorage.Basket = JSON.stringify(cartitems);
    } else {
      const products = JSON.parse(localStorage.Basket);
      products.push(product);
      localStorage.Basket = JSON.stringify(products);
    }
  }

  onselectSubCategory(category) {
    this.dataService.getproducts(category.subId).subscribe(d => this.products = d.data);

  }

}
