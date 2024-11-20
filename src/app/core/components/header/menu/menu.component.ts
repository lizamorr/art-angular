import {
  CommonModule,
  DOCUMENT,
} from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  Router,
  RouterLink,
} from '@angular/router';

import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'core-menu',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnDestroy {
  @HostBinding('class.is-mobile') isMobile: boolean = false;

  public document = inject(DOCUMENT);
  public router = inject(Router);
  public isSidenavOpen = signal(false);

  public ngOnInit() {
    this.checkScreenSize();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  }

  public ngOnDestroy(): void {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('no-scroll');
    }
  }

  public toggleSidenav(isOpen: boolean): void {
    this.isSidenavOpen.set(isOpen);
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  public checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
    this.isSidenavOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('no-scroll');
    }
  }

  public isActive(route: string): boolean {
    return this.router.url === route;
  }
}
