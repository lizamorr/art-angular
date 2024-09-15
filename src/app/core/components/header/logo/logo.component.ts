import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'core-logo',
  standalone: true,
  imports: [RouterLink],
  template: `<a
    class="fixed left-2 top-2 z-50"
    routerLink="/"
    title="Liza Morrison"
  >
    <img
      src="assets/images/initials.png"
      class="h-12 w-20 md:h-16 md:w-24 cursor-pointer z-50"
      aria-label="Navigate home"
      height="40"
      width="64"
    />
  </a>`,
})
export class LogoComponent {}
