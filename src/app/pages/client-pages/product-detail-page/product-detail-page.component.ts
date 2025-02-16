import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { productDetail } from '../../../models/product-detail';
import { Product } from '../../../models/product';
import { filter } from 'rxjs';
import { SEOService } from '../../../service/seo.service';
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  data: productDetail[] = [];
  recentSlideIndex = 1;
  recommendSlideIndex = 1;
  slideSize = 4;
  cookie: productDetail[] = [];
  slideData: productDetail[] = [];

  onRecentSlideChange() {
    this.slideData = this.cookie.slice(
      (this.recentSlideIndex - 1) * this.slideSize,
      this.recentSlideIndex * this.slideSize
    );
  }
  onRecommendSlideChange() {
    this.slideData = this.cookie.slice(
      (this.recommendSlideIndex - 1) * this.slideSize,
      this.recommendSlideIndex * this.slideSize
    );
  }
  nextSlide($event: Event) {
    if (this.recentSlideIndex < this.cookie.length / this.slideSize)
      this.recentSlideIndex++;
    this.onRecentSlideChange();

    // const target = $event.target as HTMLElement;
    // if (target.classList.contains('recent-view')) {
    //   if(this.recentSlideIndex<(this.cookie.length/this.slideSize))
    //     this.recentSlideIndex++;
    //     this.onRecentSlideChange()
    // } else if (target.classList.contains('recommend')) {
    //   if(this.recommendSlideIndex<(this.cookie.length/this.slideSize))
    //     this.recommendSlideIndex++;
    //     this.onRecommendSlideChange()
    // }
  }

  prevSlide($event: Event) {
    if (this.recentSlideIndex > 1) this.recentSlideIndex--;
    this.onRecentSlideChange();

    // const target = $event.target as HTMLElement;
    // if (target.classList.contains('recent-view')) {
    //   if(this.recentSlideIndex>1)
    //     this.recentSlideIndex--;
    //     this.onRecentSlideChange()
    // } else if (target.classList.contains('recommend')) {
    //   if(this.recommendSlideIndex>1)
    //     this.recommendSlideIndex--;
    //     this.onRecommendSlideChange()
    // }
  }

  viewDetail: string[] = [];

  details: productDetail[] = [];
  detail: productDetail | null = null;
  productName: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private SEOservice: SEOService
  ) {
  }
  ngOnInit(): void {
    this.getProductDetail();
    this.getSlideData();
    this.onRecentSlideChange();
    this.onRecommendSlideChange();
    this.setMeta();
    if(window) {
      var width = window.innerWidth;
      if(width<=549) this.slideSize = 2
      else if(width<=849) this.slideSize = 3
    }
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        
        this.getProductDetail();
        this.productService.saveCookie(this.productName!);
        this.getSlideData();
        this.onRecentSlideChange();
        this.onRecommendSlideChange();
        this.recentSlideIndex = 1;
        this.recommendSlideIndex = 1;
        this.setMeta();
      });
  }

  getSlideData() {
    this.productService.getCookie().forEach(p=>this.cookie.push(this.productService.findProductDetailbyUrl(p)[0]));
  }

  getProductDetail() {
    this.productName = this.route.snapshot.paramMap.get('productUrl');
    this.detail = this.productService.findProductDetailbyUrl(this.productName)[0];
    this.data = this.productService.getProductsDetail();
    
  }

  setMeta() {
    this.SEOservice.defaultSetup(
      this.detail!.productName,
      this.truncateString(this.detail!.desc, 50),
      'https://cuanhuago.vn/chi-tiet/' + this.detail?.url,
      this.detail!.pic,
      Date.now().toString()
    );
  }

  truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  }
  typeText(text: string | null): string {
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
}
