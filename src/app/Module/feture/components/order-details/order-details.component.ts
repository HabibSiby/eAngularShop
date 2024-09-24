import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  orders=[1,1,1];

  steps=[
    {id:0, title:"PLACED", isCompleted:true},
    {id:1, title:"CONFIRMED", isCompleted:false},
    {id:2, title:"SHIIPPED", isCompleted:false},
    {id:3, title:"DELIVERY", isCompleted:false}
  ]

}
