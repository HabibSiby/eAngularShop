import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:any;
  constructor(private router:Router){

  }

  navigate(path:string){
    this.router.navigate([`product-details/${path}`]);
  }
  
}
