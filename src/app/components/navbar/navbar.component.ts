import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGlobe, faBars, faX } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentRoute = '';

  faGlobe = faGlobe;
  faBars = faBars;
  faX = faX;
  showServices = false;

  // Get current route
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  toggleServices() {
    this.showServices = !this.showServices;
  }
}
