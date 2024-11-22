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


  truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }

  constructor(private productService: ProductService, private meta: Meta, private title: Title) { }
  ngOnInit() {
    this.data = this.productService.getProducts();
    // this.data = this.productService.getProducts();

    this.title.setTitle("Danh sách sản phẩm của cửa hàng SEOweb");
    this.meta.updateTag({ 
      name: 'description',
      content: 'Danh sách sản phẩm của cửa hàng SEOweb, miễn phí lắp đặt và thi công'
    });
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
}
