import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
  public isOnContactPage = signal(false);

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.checkIfOnContactPage();
    });
    this.checkIfOnContactPage();
  }

  private checkIfOnContactPage() {
    const url = this.router.url;
    this.isOnContactPage.set(url.endsWith('/contact'));
  }
}
