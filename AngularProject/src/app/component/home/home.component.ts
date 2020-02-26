import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any;


  constructor(private dataService: DataService, private  router: Router) {
  }

  ngOnInit(): void {
    this.dataService.getCalegories().subscribe(d => this.categories = d.data);
  }

  onselectCategory(category) {
    console.log(category.catId);
    this.router.navigate(['/products', category.catId]);
  }

}
