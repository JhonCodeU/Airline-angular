import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logo: string = 'assets/images/logo.svg';
  faFacebook = faFacebookF;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor() { }
}
