import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery-image-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './image-carousel.component.html',
})
export class ImageCarouselComponent {
  public group = input.required<Array<any>>();
  public index = input.required<number>();
  public currentIndex = signal(0);
  public touchStartX = 0;
  public touchEndX = 0;

  public document = inject(DOCUMENT);

  public currentImage = computed(() => {
    return this.group()[this.currentIndex()];
  });

  public largestGroupImg = computed(() => {
    return this.group().reduce((maxItem, currentItem) => {
      return currentItem.originalWidth > (maxItem.originalWidth || 0)
        ? currentItem
        : maxItem;
    }, {});
  });

  public largestGroupImgWidth = computed(() => {
    return this.largestGroupImg().originalWidth;
  });

  public currentLargestGroupImgWidth = computed(() => {
    const imgWithLargestWidth = this.largestGroupImg();
    const currentImageWidth = this.document.getElementById(
      imgWithLargestWidth.id
    )?.clientWidth;

    return currentImageWidth || imgWithLargestWidth.originalWidth;
  });

  public extraPaddingForSmallImgs = computed(() => {
    const currentLargestImgWidth = this.currentLargestGroupImgWidth();
    const largestWidth = this.largestGroupImgWidth();

    const currentWidth = this.group()[this.currentIndex()].originalWidth;
    const currentImageWidth = this.document.getElementById(
      this.group()[this.currentIndex()].id
    )?.clientWidth;

    const widthDifference =
      (currentLargestImgWidth || largestWidth) -
      (currentImageWidth || currentWidth);
    const horizontalPadding = widthDifference / 2;

    return horizontalPadding;
  });

  public goToNextImage() {
    this.currentIndex.set((this.currentIndex() + 1) % this.group().length);
  }

  public goToPrevImage() {
    this.currentIndex.set(
      (this.currentIndex() - 1 + this.group().length) % this.group().length
    );
  }

  public goToImage(index: number) {
    this.currentIndex.set(index);
  }

  public onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  public onTouchMove(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
  }

  public onTouchEnd() {
    const deltaX = this.touchEndX - this.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        this.goToNextImage();
      } else {
        this.goToPrevImage();
      }
    }
  }
}
