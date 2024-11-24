import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page-layout',
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.scss'
})
export class ProductPageLayoutComponent {

  productType !: string | null;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.productType = this.route.snapshot.paramMap.get('productType');
    
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
