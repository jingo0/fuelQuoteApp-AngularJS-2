import { Component } from "@angular/core";

@Component({
    selector: "nav-bar",
    templateUrl: `./navbar.component.html`,
    styles: [`
    .navbar-default{ background-color:#282d32 !important;  }
    .navbar {
    box-shadow: none;
    border: none;
    font-size: 15px;
    }
    `]
})

export class navbarComponent {
    constructor(){}
}