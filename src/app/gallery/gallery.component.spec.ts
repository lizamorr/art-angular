import { CommonModule } from '@angular/common';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { GalleryComponent } from './gallery.component';
import {
  ImageCarouselComponent,
} from './image-carousel/image-carousel.component';
import { TypeToggleComponent } from './type-toggle/type-toggle.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GalleryComponent,
        CommonModule,
        MatIconModule,
        TypeToggleComponent,
        ImageCarouselComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
