import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetail, productDetails } from '../models/product-detail';
import { Product } from '../models/product';
import { News } from '../models/news';
import * as productjson from './../../assets/data/products.json';
import * as newsjson from './../../assets/data/news.json';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Productjson = (productjson as any).default;
  Newsjson = (newsjson as any).default;

  cookieData : string[] = []


  private ProductjsonUrl = 'assets/data/products.json';
  private NewsjsonUrl = 'assets/data/news.json';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getProductsObs(): Observable<any> {
    return this.http.get<any>(this.ProductjsonUrl);
  }
  getProducts(): Product[] {
    var products: Product[] = [];
    this.getProductsObs().subscribe(p=>products=p);
    // return products;

    return this.Productjson;

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

  findProductsbyName(url: string | null): Product[] {
    if (url === null) {
      return [];
    }
    return this.getProducts().filter(product => product.url === url);
  }

  findProductsbyNames(urls: string[]): Product[] {
    var products : Product[] = [];
    for(let url of urls) {
      products = products.concat(this.findProductsbyName(url));
      
    }
    return products;
  }


  getNewsObs(): Observable<any> {
    return this.http.get<any>(this.NewsjsonUrl);
  }
  getNews(): News[] {
    var news: News[] = [];
    this.getNewsObs().subscribe(n=>news=n);
    
    // return news;

    return this.Newsjson;
  }

  findNewbyName(name: string | null): News[] {
    if (name === null) {
      return [];
    }
    
    return this.getNews().filter(newsItem => newsItem.name === name);
  }

  getCookie() {
    const productDetailCookie = this.cookieService.get("productDetail");
    try {
      this.cookieData = JSON.parse(productDetailCookie);
    } catch (error) {
      console.error("Invalid JSON in cookie:", error);
      this.cookieData = []; // Gán giá trị mặc định nếu lỗi
    }
    return this.cookieData;
  }

  saveCookie(url : string) {
    this.getCookie();
    if (!this.cookieData.includes(url)) {
      this.cookieData.push(url);
    }
    var jsonParse = JSON.stringify(this.cookieData) ;
    
    this.cookieService.set("productDetail", jsonParse)

    
  }

}
