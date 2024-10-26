import { Component } from '@angular/core';

@Component({
  selector: 'core-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public githubLink = 'https://github.com/lizamorr/art-angular';
  public year = new Date().getFullYear();
}
