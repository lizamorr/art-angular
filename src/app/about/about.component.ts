import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  animations: [
    trigger('fadeInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition('void => *', [
        animate(
          '500ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('300ms ease-in')]),
    ]),
  ],
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
