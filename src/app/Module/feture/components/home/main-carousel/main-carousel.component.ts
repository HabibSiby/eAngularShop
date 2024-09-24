import { afterNextRender, ApplicationRef, Component, inject } from '@angular/core';
import { first } from 'rxjs';
import { homeSpotlightData } from 'src/data/mainSpotlight';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent {
  constructor() {
    const applicationRef = inject(ApplicationRef)

    applicationRef.isStable.pipe( first((isStable) => isStable)).subscribe(() => {
      setInterval(() => this.nextSlide(), 1000)
     })
  }

  spotlightData:any;

  currentSlide=0;
  interval:any;
  ngOnInit(){
    this.spotlightData=homeSpotlightData;
    //console.log(this.spotlightData)
    this.startImageRotation();
    //this.playImage()
   
  }
  playImage() {
    this.interval = setInterval(()=>{
      this.nextSlide();
    }, 2000)
  }

  startImageRotation(): void {
     afterNextRender(() => {
      this.interval = setInterval(()=>{
        this.nextSlide();
      }, 2000)
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide+1) % this.spotlightData.length;
  }
}
