import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  HostListener,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import {
  ImageCarouselComponent,
} from './image-carousel/image-carousel.component';
import { imageGroups } from './image-groups';
import { TypeToggleComponent } from './type-toggle.component';

type SelectedType =
  | 'isDrawingSelected'
  | 'isPaintingSelected'
  | 'isDigitalSelected'
  | 'isOtherSelected';

type ActiveFilter = 'drawing' | 'painting' | 'digital' | 'misc' | 'all';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    TypeToggleComponent,
    ImageCarouselComponent,
  ],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  public isDrawingSelected = signal(false);
  public isPaintingSelected = signal(false);
  public isDigitalSelected = signal(false);
  public isOtherSelected = signal(false);
  public isScrollBtnDisplayed = signal(true);

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrollBtnDisplayed.set(scrollTop > 20);
  }

  public filteredImages = computed(() => {
    let activeFilter: ActiveFilter = 'all';
    if (this.isPaintingSelected()) activeFilter = 'painting';
    else if (this.isDrawingSelected()) activeFilter = 'drawing';
    else if (this.isOtherSelected()) activeFilter = 'misc';
    else if (this.isDigitalSelected()) activeFilter = 'digital';

    if (activeFilter === 'all') {
      return imageGroups;
    }

    const filteredImages = imageGroups.filter((group) =>
      group.some((img) => img.id === activeFilter)
    );

    return filteredImages;
  });

  public scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  public removeFilters() {
    this.isDrawingSelected.set(false);
    this.isPaintingSelected.set(false);
    this.isDigitalSelected.set(false);
    this.isOtherSelected.set(false);
  }

  public toggleSelection = (selectedType: SelectedType) => {
    this.scrollToTop();
    this.removeFilters();

    switch (selectedType) {
      case 'isDrawingSelected':
        this.isDrawingSelected.set(true);
        break;
      case 'isPaintingSelected':
        this.isPaintingSelected.set(true);
        break;
      case 'isDigitalSelected':
        this.isDigitalSelected.set(true);
        break;
      case 'isOtherSelected':
        this.isOtherSelected.set(true);
        break;
      default:
        this.removeFilters();
    }
  };
}
