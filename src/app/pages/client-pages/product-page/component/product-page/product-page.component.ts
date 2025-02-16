import {  Component } from '@angular/core';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../service/product.service';
import { SEOService } from '../../../../../service/seo.service';
import { productDetail } from '../../../../../models/product-detail';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  data: productDetail[] = [];
  PageIndex = 1;
  PageSize = 12;
  pageData: productDetail[] = [];
  truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  }

  constructor(
    private productService: ProductService,
    private SEOservice: SEOService
  ) {
  }
  ngOnInit() {
    this.data = this.productService.getProductsDetail();
    this.getSlideData();
    this.setMeta();
    this.onRecentSlideChange();
    this.onPageIndexChange();
    if(window) {
      var width = window.innerWidth;
      if(width<=549) this.slideSize = 2
      else if(width<=849) this.slideSize = 3
    }
  }

  scrollToTop(){
    if(window)
    window.scrollTo(0,0)
  }

  setMeta() {
    this.SEOservice.defaultSetup(
      'Danh sách sản phẩm của cửa hàng Cửa gỗ nhựa Kinh Bắc',
      'Danh sách sản phẩm của cửa hàng Cửa gỗ nhựa Kinh Bắc, miễn phí lắp đặt và thi công',
      'https://cuanhuago.vn/san-pham',
      'assets/img/layout-page/ban-an.png',
      Date.now().toString()
    );
  }

  getSlideData() {

    this.productService.getCookie().forEach(p => this.cookie.push(this.productService.findProductDetailbyUrl(p)[0]));

    console.log(this.cookie + " + hi + " + this.productService.getCookie()[0]);
    
  }

  typeText(text: string): String {
    switch (text) {
      case 'cua-go-nhua-composite':
        return 'Cửa gỗ nhựa Composite';
      case 'cua-go-cong-nghiep':
        return 'Cửa gỗ công nghiệp';
      case 'cua-chong-chay':
        return 'Cửa chống cháy';
      default:
        return 'Cửa gỗ nhựa Composite';
    }
  }

  onPageIndexChange() {
    this.pageData = this.data.slice(
      (this.PageIndex - 1) * this.PageSize,
      this.PageIndex * this.PageSize
    );
    this.scrollToTop()
  }

  indexChange($event: number) {
    this.PageIndex = $event;
    this.onPageIndexChange();
  }
  pageSizeChange($event: number) {
    this.PageSize = $event;
  }

  recentSlideIndex = 1;
  cookie: productDetail[] = [];
  slideData: productDetail[] = [];
  slideSize = 4;
  onRecentSlideChange() {
    this.slideData = this.cookie.slice(
      (this.recentSlideIndex - 1) * this.slideSize,
      this.recentSlideIndex * this.slideSize
    );
  }
  nextSlide($event: Event) {
    if (this.recentSlideIndex < this.cookie.length / this.slideSize)
      this.recentSlideIndex++;
    this.onRecentSlideChange();
  }

  prevSlide($event: Event) {
    if (this.recentSlideIndex > 1) this.recentSlideIndex--;
    this.onRecentSlideChange();
  }
}
