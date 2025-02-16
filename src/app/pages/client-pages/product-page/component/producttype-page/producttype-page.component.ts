import { Component } from '@angular/core';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../service/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SEOService } from '../../../../../service/seo.service';
import { productDetail } from '../../../../../models/product-detail';

@Component({
  selector: 'app-producttype-page',
  templateUrl: './producttype-page.component.html',
  styleUrl: './producttype-page.component.scss',
})
export class ProducttypePageComponent {
  data: productDetail[] = [];
  PageIndex = 1;
  PageSize = 12;
  slideIndex = 1;
  slideSize = 4;
  pageData: productDetail[] = [];
  slideData: productDetail[] = [];
  productType!: string | null;
  metaImg: string = '';
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private SEOservice: SEOService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.getProductType();
    // this.data = this.productService.getProducts();

    this.setMeta();
    this.onPageIndexChange();
    this.onSlideChange();
    if(window) {
      var width = window.innerWidth;
      if(width<=549) this.slideSize = 2
      else if(width<=849) this.slideSize = 3
    }
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.getProductType();
        this.onPageIndexChange();
        this.onSlideChange();
        this.setMeta();
      });
  }

  scrollToTop(){
    if(window)
    window.scrollTo(0,0)
  }
  setMeta() {
    this.SEOservice.defaultSetup(
      this.typeText(this.productType),
      this.pageTitle(this.productType),
      'https://cuanhuago.vn/san-pham' + this.productType,
      'assets/img/producttype-page/' + this.metaImg,
      Date.now().toString()
    );
  }

  getProductType() {
    this.productType = this.route.snapshot.paramMap.get('productType');
    this.data = this.productService.findProductDetailbyType(this.productType);
    this.metaImg = this.metaImgString(this.productType!);
  }

  metaImgString(type: string) {
    switch (type) {
      case 'cua-go-nhua-composite':
        return 'chua-biet-ten1-1024x1024.jpg';
      case 'cua-go-cong-nghiep':
        return '358089813_640830444734611_2778823727039750723_n.jpg';
      case 'cua-chong-chay':
        return 'z4366752216011_6c5050d59dfeca3995457a92f763c87b-790x1024.jpg';
      default:
        return '';
    }
  }

  onPageIndexChange() {
    this.pageData = this.data.slice(
      (this.PageIndex - 1) * this.PageSize,
      this.PageIndex * this.PageSize
    );
    this.scrollToTop()
  }
  onSlideChange() {
    this.slideData = this.data.slice(
      (this.slideIndex - 1) * this.slideSize,
      this.slideIndex * this.slideSize
    );
  }
  nextSlide() {
    if (
      this.slideIndex >= 1 &&
      this.slideIndex < this.data.length / this.slideSize
    )
      this.slideIndex++;
    this.onSlideChange();
  }
  prevSlide() {
    if (
      this.slideIndex >= 1 &&
      this.slideIndex < this.data.length / this.slideSize
    )
      this.slideIndex--;
    this.onSlideChange();
  }

  indexChange($event: number) {
    this.PageIndex = $event;
    this.onPageIndexChange();
  }
  pageSizeChange($event: number) {
    this.PageSize = $event;
  }

  pageTitle(text: string | null): string {
    if (text)
      switch (text) {
        case 'cua-go-nhua-composite':
          return 'Chào mừng bạn đến với bộ sưu tập cửa gỗ nhựa Composite. Được sản xuất từ nguyên liệu thân thiên với môi trường, cùng với đó là những ưu điểm vượt trội. Đây là một sự lựa chọn đúng đắn khi bạn sử dụng để lắp đặt cho ngôi nhà của mình !!!';
        case 'cua-go-cong-nghiep':
          return 'Được sử dụng nhiều trong các công trình chung cư, nhà cao tầng. Sản xuất từ gỗ công nghiệp MDF chống ẩm, với nhiều mẫu mã đa dạng.';
        case 'cua-chong-chay':
          return 'Được tin dùng trong các công trình, dự án cao tầng. Giúp ngăn khói và lửa trong một khoảng thời gian nhất định.';
        default:
          return 'Chào mừng bạn đến với bộ sưu tập cửa gỗ nhựa Composite. Được sản xuất từ nguyên liệu thân thiên với môi trường, cùng với đó là những ưu điểm vượt trội. Đây là một sự lựa chọn đúng đắn khi bạn sử dụng để lắp đặt cho ngôi nhà của mình !!!';
      }
    else return '';
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
