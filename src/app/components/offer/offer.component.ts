import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  title = 'Offers';
  data = [
    {
      imageUrl: 'assets/images/cards/new-york.jpg',
      name: 'New York',
      price: 400.00,
      cardClass: 'size_normal',
    },
    {
      imageUrl: 'assets/images/cards/turkey.jpg',
      name: 'Turkey',
      price: 500.00,
      cardClass: 'size_large',
    },
    {
      imageUrl: 'assets/images/cards/paris.jpg',
      name: 'Paris',
      price: 600.00,
      cardClass: 'size_normal',
    }
  ];
}
