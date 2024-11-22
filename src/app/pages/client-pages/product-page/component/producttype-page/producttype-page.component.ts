import { Component } from '@angular/core';
import { Product } from '../../../../../models/product';
import { ProductService } from '../../../../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-producttype-page',
  templateUrl: './producttype-page.component.html',
  styleUrl: './producttype-page.component.scss'
})
export class ProducttypePageComponent {
  data: Product[] = [];
  productType !: string | null;
  constructor(private productService: ProductService, private route: ActivatedRoute, private meta: Meta, private title: Title) { }
  ngOnInit() {
    this.productType = this.route.snapshot.paramMap.get('productType');
    this.data = this.productService.findProductbyType(this.productType);
    // this.data = this.productService.getProducts();

    this.title.setTitle(this.typeText(this.productType));
    this.meta.updateTag({ 
      name: 'description',
      content: this.pageTitle(this.productType)
    });
  }



  pageTitle(text : string|null) : string  {
    if(text)
    switch (text) {
      case "cua-go-nhua-composite":
        return  "Chào mừng bạn đến với bộ sưu tập cửa gỗ nhựa Composite. Được sản xuất từ nguyên liệu thân thiên với môi trường, cùng với đó là những ưu điểm vượt trội. Đây là một sự lựa chọn đúng đắn khi bạn sử dụng để lắp đặt cho ngôi nhà của mình !!!";
      case "cua-go-cong-nghiep":
        return  "Được sử dụng nhiều trong các công trình chung cư, nhà cao tầng. Sản xuất từ gỗ công nghiệp MDF chống ẩm, với nhiều mẫu mã đa dạng.";
      case "cua-chong-chay":
        return  "Được tin dùng trong các công trình, dự án cao tầng. Giúp ngăn khói và lửa trong một khoảng thời gian nhất định.";
      default:
        return "Chào mừng bạn đến với bộ sưu tập cửa gỗ nhựa Composite. Được sản xuất từ nguyên liệu thân thiên với môi trường, cùng với đó là những ưu điểm vượt trội. Đây là một sự lựa chọn đúng đắn khi bạn sử dụng để lắp đặt cho ngôi nhà của mình !!!";
    }
    else return '';
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
