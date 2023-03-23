import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <div id="page-container">
   <div id="content-wrap">
    <router-outlet></router-outlet>
   </div>
  </div>
  <footer-comp></footer-comp>`,
})

export class AppComponent {
  title = 'fuelQuoteApp';
}
