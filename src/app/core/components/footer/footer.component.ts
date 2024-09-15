import { Component } from '@angular/core';

@Component({
  selector: 'core-footer',
  standalone: true,
  imports: [],
  template: `<footer
    class="cursor-pointer relative bottom-0 left-0 mt-auto p-2 z-10 w-full flex justify-center tracking-wider"
  >
    <a href="{{ githubLink }}" target="_blank">© Liza Morrison {{ year }}</a>
  </footer> `,
})
export class FooterComponent {
  public githubLink = 'https://github.com/lizamorr/artwork-website';
  public year = new Date().getFullYear();
}
