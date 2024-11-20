import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Liza Morrison Art',
    component: HomeComponent,
    data: { animationState: 'One' },
  },
  {
    path: 'gallery',
    title: 'Gallery',
    component: GalleryComponent,
    data: { animationState: 'Two' },
  },
  {
    path: 'contact',
    title: 'Contact Liza',
    component: ContactComponent,
    data: { animationState: 'Three' },
  },
  {
    path: 'about',
    title: 'About Liza',
    component: AboutComponent,
    data: { animationState: 'Four' },
  },
];
