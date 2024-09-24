import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import 'zone.js';

interface SlideContent {
  imagesrc: string;
  imagealt: string;
}


@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {
  @Input() images: SlideContent[] = [];
  @Input() indicators = true;
  @Input() autoplay = true;

  
  selectedIndex = 0;
  intervalId: any;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private _platformId: Object) {
    this.isBrowser = isPlatformBrowser(this._platformId);
  }

  ngAfterViewInit(): void {
    console.log('Slideshow initialized with images:', this.images);
    if (this.isBrowser) {
      if (this.autoplay) {
        this.startAutoSlide();
        console.log("Je suis la")
      }
    }
  }

  //sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
    console.log("selectedImageIndex dans selectImage", this.selectedIndex)
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      console.log("called nextSlide")
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    console.log("selectedImageIndex dans nextSlide", this.selectedIndex)
  }

  previousSlide() {
    this.selectedIndex =
      (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }
}


