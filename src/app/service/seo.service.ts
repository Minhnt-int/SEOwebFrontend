import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(private title: Title, private meta: Meta) {}

  updateTitle(title: string) {
    this.meta.updateTag({ name: 'og:title', content: title });
    this.title.setTitle(title);
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc });
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url });
  }
  updateOgLocale(locale: string) {
    this.meta.updateTag({ name: 'og:locale', content: locale });
  }

  updateOgImage(img: string) {
    this.meta.updateTag({ name: 'og:image', content: img });
  }
  updateOgSitename(name: string) {
    this.meta.updateTag({ name: 'og:site_name', content: name });
  }
  updateOgType(type: string) {
    this.meta.updateTag({ name: 'og:type', content: type });
  }
  updateTwitterCard(card: string) {
    this.meta.updateTag({ name: 'twitter:card', content: card });
  }
  updateArticle(time: string) {
    this.meta.updateTag({ name: 'article:modified_time', content: time });
  }
  setRobots(robots: string) {
    this.meta.updateTag({ name: 'robots', content: robots });
  }
  setViewport(viewport: string) {
    this.meta.updateTag({ name: 'viewport', content: viewport });
  }
  defaultSetup(
    title: string,
    desc: string,
    url: string,
    img: string,
    time: string
  ) {
    this.updateTitle(title);
    this.updateDescription(desc);
    this.updateOgUrl(url);
    this.updateOgImage(img);
    this.updateArticle(time);
    this.updateOgLocale('vi_VN');
    this.updateOgSitename('Cửa gỗ nhựa Kinh Bắc');
    this.updateOgType('website');
    this.updateTwitterCard('summary_large_image');
    this.setRobots(
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    this.setViewport('width=device-width, initial-scale=1');
  }
}
