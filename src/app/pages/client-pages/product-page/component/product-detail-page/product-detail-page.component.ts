import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../../service/product.service';
import { productDetail } from '../../../../../models/product-detail';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {



  details : productDetail[]  = [];
  detail : productDetail | null  = null;
  productName: string | null = null;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('productUrl');
    this.details =  this.productService.findProductDetailbyUrl(this.productName);
    this.detail = this.details[0];
    console.log(this.detail);
    // Hoặc sử dụng route.params để lấy dữ liệu động
    // this.route.params.subscribe(params => {
    //   this.productName = params['productName'];
    // });
  }




}
