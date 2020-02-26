import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  private baseurl = 'http://apolis-grocery.herokuapp.com/api';
  private categoryurl = '/category';
  private  subcatory = '/subcategory/';
  private products = '/products/';

  constructor(private http: HttpClient) {
  }

  getCalegories(): Observable<any> {
    // @ts-ignore
    return this.http.get(this.baseurl + this.categoryurl);
  }

  getSubcategories(catId: any): Observable<any> {
    // @ts-ignore
    return this.http.get(this.baseurl + this.subcatory + catId);
  }

  getproducts(catId: any): Observable<any> {
    // @ts-ignore
    return this.http.get(this.baseurl + this.products + catId);
  }



}
