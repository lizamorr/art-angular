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
  },
  {
    path: 'gallery',
    title: 'Gallery',
    component: GalleryComponent,
  },
  {
    path: 'contact',
    title: 'Contact Liza',
    component: ContactComponent,
  },
  {
    path: 'about',
    title: 'About Liza',
    component: AboutComponent,
  },
];
