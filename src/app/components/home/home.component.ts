import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}
  inLightMode: boolean = true;
  displaySidebarMobile: boolean = false;

  toggleMode() {
    this.inLightMode = !this.inLightMode;
  }

  toogleMobileSidebar() {
    this.displaySidebarMobile = !this.displaySidebarMobile;
  }
}
