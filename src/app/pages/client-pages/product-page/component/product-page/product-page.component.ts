import { Component } from '@angular/core';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../service/product.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  data: Product[] = [];
  PageIndex=1;
  PageSize=12;
  pageData: Product[] = [];

  truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  constructor(private productService: ProductService, private meta: Meta, private title: Title) { }
  ngOnInit() {
    this.data = this.productService.getProducts();
    // this.data = this.productService.getProducts();
    this.getSlideData()
    this.onRecentSlideChange();
    this.title.setTitle("Danh sách sản phẩm của cửa hàng SEOweb");
    this.meta.updateTag({ 
      name: 'description',
      content: 'Danh sách sản phẩm của cửa hàng SEOweb, miễn phí lắp đặt và thi công'
    });
    this.onPageIndexChange();
  }

  getSlideData() {
    this.cookie = this.productService.findProductsbyNames(this.productService.getCookie())
    
  }

  typeText(text : string) : String {
    switch (text) {
      case "cua-go-nhua-composite":
        return  "Cửa gỗ nhựa Composite";
      case "cua-go-cong-nghiep":
        return  "Cửa gỗ công nghiệp";
      case "cua-chong-chay":
        return  "Cửa chống cháy";
      default:
        return "Cửa gỗ nhựa Composite";
    }
    
  }

  onPageIndexChange() {
    this.pageData = this.data.slice((this.PageIndex-1)*(this.PageSize), (this.PageIndex)*(this.PageSize));
  }


  indexChange($event : number){
    this.PageIndex = $event;
    this.onPageIndexChange();
  }
  pageSizeChange($event : number){
    this.PageSize = $event;
  }

  recentSlideIndex=1;
  cookie: Product[] = [];
  slideData: Product[] = [];
  slideSize=4;
  onRecentSlideChange() {
    this.slideData = this.cookie.slice((this.recentSlideIndex-1)*(this.slideSize), (this.recentSlideIndex)*(this.slideSize));
  }
  nextSlide($event : Event){

    if(this.recentSlideIndex<(this.cookie.length/this.slideSize))
        this.recentSlideIndex++;
        this.onRecentSlideChange()
  }

  prevSlide($event : Event){
    if(this.recentSlideIndex>1)
      this.recentSlideIndex--;
      this.onRecentSlideChange()

  }
}
