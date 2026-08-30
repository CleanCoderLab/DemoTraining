import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SeoService {
  setTitle(title: string) { document.title = title; }
  setMeta(name: string, content: string) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }
}
