import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  title: string = 'Take a rest';
  content: string = 'Discover all the offers available at the best prices for whole country and the world';
  button: string = 'Comprar';
}
