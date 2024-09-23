import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public metaService = inject(Meta);

  public ngOnInit(): void {
    this.metaService.addTags([
      { name: 'keywords', content: 'Liza, Morrison, Art' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Liza Morrison' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
    ]);
  }
}
