import { Component } from '@angular/core';
import { ProductService } from '../../../../../service/product.service';
import { Product } from '../../../../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  data: Product[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProducts().subscribe((product: Product[]) => {
      this.data = product;
    });
    // this.data = this.productService.getProducts();
  }
}
