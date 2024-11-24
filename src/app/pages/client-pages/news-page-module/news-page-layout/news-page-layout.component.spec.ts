import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageLayoutComponent } from './news-page-layout.component';

describe('NewsPageLayoutComponent', () => {
  let component: NewsPageLayoutComponent;
  let fixture: ComponentFixture<NewsPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
