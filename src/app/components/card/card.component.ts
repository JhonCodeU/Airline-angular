import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageUrl: string;
  @Input() name: string;
  @Input() price: number;
  @Input() cardClass: string;

  constructor() {
    this.imageUrl = '';
    this.name = '';
    this.price = 0;
    this.cardClass = '';
   }
}
