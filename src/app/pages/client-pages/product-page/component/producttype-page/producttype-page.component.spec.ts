import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypePageComponent } from './producttype-page.component';

describe('ProducttypePageComponent', () => {
  let component: ProducttypePageComponent;
  let fixture: ComponentFixture<ProducttypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProducttypePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
