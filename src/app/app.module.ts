import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { footerComponent } from './footer/footer.component';
import { navbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { WelcomeComponent } from './welcome/welcome.component';
// "node_modules/bootstrap/dist/css/bootstrap.min.css",
@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    footerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
