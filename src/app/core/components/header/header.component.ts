import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
} from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'core-header',
  standalone: true,
  imports: [MenuComponent, LogoComponent, CommonModule, RouterLink],
  providers: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);
  public isOnContactOrHomePage = signal(false);

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkIfOnContactOrHomePage();
    });
    this.checkIfOnContactOrHomePage();
  }

  private checkIfOnContactOrHomePage() {
    const url = this.router.url;
    this.isOnContactOrHomePage.set(
      url.endsWith('/contact') ||
        (!url.endsWith('/gallery') && !url.endsWith('/about'))
    );
  }
}
