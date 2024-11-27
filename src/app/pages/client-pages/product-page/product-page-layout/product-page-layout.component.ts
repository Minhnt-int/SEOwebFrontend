import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-page-layout',
  templateUrl: './product-page-layout.component.html',
  styleUrl: './product-page-layout.component.scss'
})
export class ProductPageLayoutComponent {


  constructor() { }
  ngOnInit() {

  }

}
