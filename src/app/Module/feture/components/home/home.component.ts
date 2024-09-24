import { Component } from '@angular/core';
import { mensShoesPage1 } from '../../../../../data/shoes';
import { mens_kurta } from '../../../../../data/Men/men_kurta';
import { lehngacholiPage2 } from '../../../../../data/Saree/lenghaCholiPage2';
import { gounsPage1 } from '../../../../../data/Gouns/gouns';
import { menJeans } from '../../../../../data/Men/men_jeans';
import { images } from 'src/data/homeSpotlight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menJeans:any
  womenGouns:any
  lenghaCholi:any
  mensKurta:any
  mensShoes:any
  images:any


  ngOnInit() {
    this.menJeans=menJeans.slice(0,5)
    this.womenGouns=gounsPage1.slice(0,5)
    this.lenghaCholi=lehngacholiPage2.slice(0,5)
    this.mensKurta=mens_kurta.slice(0,5)
    this.mensShoes=mensShoesPage1.slice(0,5)
    this.images=images;
  }
}
