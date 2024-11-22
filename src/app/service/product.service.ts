import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetail, productDetails } from '../models/product-detail';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonUrl = './assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProductsObs(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
  getProducts(): Product[] {
    var products: Product[] = [];
    this.getProductsObs().subscribe(p=>products=p);
    return products;
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
  findProductbyType(type: string | null): Product[] {
    if (type === null) {
      return []; // Hoặc xử lý theo cách khác nếu url là null
    }
    return this.getProducts().filter(product => product.productType === type);
  }
}
