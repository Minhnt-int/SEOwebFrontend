import { Component } from '@angular/core';
import { ProductService } from '../../../../../service/product.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../../../../models/news';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss'
})
export class NewPageComponent {
  newName !: string | null;
  data!: News;
  constructor(private productService: ProductService, private route: ActivatedRoute, private meta: Meta, private title: Title) { }
  ngOnInit() {
    this.newName = this.route.snapshot.paramMap.get('newName');
    this.data = this.productService.findNewbyName(this.newName)[0];
    
  }
}
