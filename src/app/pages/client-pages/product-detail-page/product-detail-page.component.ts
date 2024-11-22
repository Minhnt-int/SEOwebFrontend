import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { productDetail } from '../../../models/product-detail';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {


  details : productDetail[]  = [];
  detail : productDetail | null  = null;
  productName: string | null = null;
  constructor(private route: ActivatedRoute, private productService: ProductService, private meta: Meta, private title: Title) {}
  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('productUrl');
    this.details =  this.productService.findProductDetailbyUrl(this.productName);
    this.detail = this.details[0];

    this.title.setTitle("Thông tin chi tiết " + this.detail.productName);
    this.meta.updateTag({ 
      name: 'description',
      content: `${this.truncateString(this.detail.desc , 50)}`
    });
  }

  truncateString(str: string, maxLength: number): string {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }


}
