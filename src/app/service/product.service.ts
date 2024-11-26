import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetail, productDetails } from '../models/product-detail';
import { Product } from '../models/product';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ProductjsonUrl = 'assets/data/products.json';
  private NewsjsonUrl = 'assets/data/news.json';

  constructor(private http: HttpClient) { }

  getProductsObs(): Observable<any> {
    return this.http.get<any>(this.ProductjsonUrl);
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
      return [];
    }
    return this.getProductsDetail().filter(u => u.url === url);
  }
  findProductbyType(type: string | null): Product[] {
    if (type === null) {
      return [];
    }
    return this.getProducts().filter(product => product.productType === type);
  }


  getNewsObs(): Observable<any> {
    return this.http.get<any>(this.NewsjsonUrl);
  }
  getNews(): News[] {
    var news: News[] = [];
    this.getNewsObs().subscribe(n=>news=n);
    
    return news;
  }

  findNewbyName(name: string | null): News[] {
    if (name === null) {
      return [];
    }
    
    return this.getNews().filter(newsItem => newsItem.name === name);
  }

}
