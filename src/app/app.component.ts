import {
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/header/header.component';
import { routeTransitionAnimations } from './route-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  animations: [routeTransitionAnimations],
})
export class AppComponent implements OnInit {
  public metaService = inject(Meta);
  @ViewChild('outlet') routerOutlet!: RouterOutlet;

  public ngOnInit(): void {
    this.metaService.addTags([
      { name: 'keywords', content: 'Liza, Morrison, Art' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Liza Morrison' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' },
    ]);
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState']
    );
  }
}
