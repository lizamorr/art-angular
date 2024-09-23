import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  public metaService = inject(Meta);

  public ngOnInit(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Learn more about Liza Morrison.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Liza, Morrison, About, Art',
    });
    this.metaService.updateTag({ property: 'og:title', content: 'About Liza' });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Learn more about Liza Morrison.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'assets/images/about.webp',
    });
  }
}
