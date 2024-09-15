import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HammerModule],
  template: `<div class="flex flex-col h-screen">
    <core-header class="flex-shrink-0" /><router-outlet
      class="flex-grow"
    /><core-footer class="flex-shrink-0" />
  </div>`,
})
export class AppComponent {}
