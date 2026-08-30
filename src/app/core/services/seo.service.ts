import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  updateMeta(description?: string): void {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }

  setPage(title: string, description?: string): void {
    this.updateTitle(title);
    this.updateMeta(description);
  }
}
