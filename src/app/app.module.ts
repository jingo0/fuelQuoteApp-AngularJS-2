import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { footerComponent } from './footer/footer.component';
import { navbarComponent } from './navbar/navbar.component';
import { quoteGeneratorComponent } from './quoteGenerator/quoteGenerator.component';
import { quoteHistoryComponent } from './quoteHistory/quoteHistory.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
// "node_modules/bootstrap/dist/css/bootstrap.min.css",
@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    footerComponent,
    WelcomeComponent,
    quoteGeneratorComponent,
    quoteHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
