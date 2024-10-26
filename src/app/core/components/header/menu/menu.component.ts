import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

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
  ],
  templateUrl: './menu.component.html',
})
export class MenuComponent implements AfterViewInit {
  @ViewChild('snav') sidenav!: MatSidenav;

  public ngAfterViewInit(): void {
    this.sidenav.openedChange.subscribe((opened: boolean) => {
      if (opened) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    });
  }
}
