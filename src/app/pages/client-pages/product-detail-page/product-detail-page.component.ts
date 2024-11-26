import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { productDetail } from '../../../models/product-detail';
import { Meta, Title } from '@angular/platform-browser';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {
  data: Product[] = [];
  slideIndex=1;
  slideSize=4;
  slideData: Product[] = [];

  onSlideChange() {
    this.slideData = this.data.slice((this.slideIndex-1)*(this.slideSize), (this.slideIndex)*(this.slideSize));
  }
  nextSlide(){

    if(this.slideIndex>=1&&this.slideIndex<(this.data.length/this.slideSize))
    this.slideIndex++;
    this.onSlideChange()
  }
  prevSlide(){
    
    if(this.slideIndex>=1&&this.slideIndex<(this.data.length/this.slideSize))
    this.slideIndex--;
    this.onSlideChange()
  }

  details : productDetail[]  = [];
  detail : productDetail | null  = null;
  productName: string | null = null;
  constructor(private route: ActivatedRoute, private productService: ProductService, private meta: Meta, private title: Title) {}
  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('productUrl');
    this.details =  this.productService.findProductDetailbyUrl(this.productName);
    this.detail = this.details[0];
    this.data = this.productService.getProducts();
    this.onSlideChange();
    this.title.setTitle("Thông tin chi tiết " + this.detail.productName);
    this.meta.updateTag({ 
      name: 'description',
      content: `${this.truncateString(this.detail.desc , 50)}`
    });
  }

  truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }
  typeText(text : string | null) : string {
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


}
