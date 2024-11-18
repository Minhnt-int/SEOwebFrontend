import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetail, productDetails } from '../models/product-detail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonUrl = './assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  getProductsDetail() {
    return productDetails;
  }
  findProductDetailbyUrl(url: string | null): productDetail[] {
    if (url === null) {
      return []; // Hoặc xử lý theo cách khác nếu url là null
    }
    return this.getProductsDetail().filter(u => u.url === url);
  }
}
