import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  public metaService = inject(Meta);
  public document = inject(DOCUMENT);

  public ngOnInit(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'Welcome to the home page of Liza Morrison Art.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Liza, Morrison, Home, Art',
    });
    this.metaService.updateTag({ property: 'og:title', content: 'About Liza' });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Welcome to the home page of Liza Morrison Art.',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'assets/image/labrinth-min.webp',
    });
  }

  public ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      document?.body?.classList.add('no-scroll');
    }
  }
}
