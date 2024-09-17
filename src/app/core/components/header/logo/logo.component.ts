import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'core-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
