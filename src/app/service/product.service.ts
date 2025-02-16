import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productDetail, productDetails } from '../models/product-detail';
import { Product } from '../models/product';
import { NEWS, News } from '../models/news';
import * as productjson from './../../assets/data/products.json';
import * as newsjson from './../../assets/data/news.json';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private url = 'http://localhost:8080/';
  Productjson = (productjson as any).default;
  Newsjson = (newsjson as any).default as Array<News>;

  cookieData: string[] = [];

  private ProductjsonUrl = 'assets/data/products.json';
  private NewsjsonUrl = 'assets/data/news.json';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getProductsObs(): Observable<any> {
    return this.http.get<any>(this.ProductjsonUrl);
    // return this.http.get<any>(this.url + "products");
  }

  getProductsDetail() {
    return productDetails;
  }
  findProductDetailbyUrl(url: string | null): productDetail[] {
    if (url === null) {
      return [];
    }
    return this.getProductsDetail().filter((u) => u.url === url);
  }

  findProductDetailbyName(name: string | null): productDetail[] {
    if (name === null) {
      return [];
    }
    return this.getProductsDetail().filter((u) => u.productName === name);
  }

  findProductDetailbyType(type: string | null): productDetail[] {
    if (type === null) {
      return [];
    }
    return this.getProductsDetail().filter((u) => u.type === type);
  }

  getNewsObs(): Observable<any> {
    return this.http.get<any>(this.NewsjsonUrl);
    // return this.http.get<any>(this.url + "news");
  }

  getProject(project: string): News[] {
    // var news: News[] = [];
    // this.getNewsObs().subscribe((n) => (news = n));

    // return news;
    var news: News[] = this.Newsjson.filter(item=>item.project.includes(project));
    return news;
  }

  findProjectbyName(name: string | null): News[] {
    if (name === null) {
      return [];
    }

    return this.getProject("").filter((newsItem) => newsItem.name === name);
  }

  getCookie() {
    const productDetailCookie = this.cookieService.get('productDetail');
    try {
      if (productDetailCookie)
        this.cookieData = JSON.parse(productDetailCookie);
    } catch (error) {
      console.error('Invalid JSON in cookie:', error);
      this.cookieData = []; // Gán giá trị mặc định nếu lỗi
    }
    return this.cookieData;
  }

  saveCookie(url: string) {
    this.getCookie();
    if (!this.cookieData.includes(url)) {
      this.cookieData.unshift(url);
    } else {
      const index = this.cookieData.findIndex((a) => a == url); // Tìm vị trí phần tử
      if (index !== -1) {
        const [element] = this.cookieData.splice(index, 1); // Xóa phần tử khỏi vị trí cũ
        this.cookieData.unshift(element); // Thêm phần tử vào đầu mảng
      }
    }
    var jsonParse = JSON.stringify(this.cookieData);

    this.cookieService.set('productDetail', jsonParse);
  }
}
