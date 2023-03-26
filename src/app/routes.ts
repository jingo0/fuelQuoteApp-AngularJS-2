import { Routes } from "@angular/router";
import { quoteGeneratorComponent } from "./quoteGenerator/quoteGenerator.component";
import { quoteHistoryComponent } from "./quoteHistory/quoteHistory.component";
import { WelcomeComponent } from "./welcome/welcome.component";


export const appRoutes:Routes = [
    { path: '', component:WelcomeComponent},
    { path: 'getQuote', component:quoteGeneratorComponent},
    { path: 'quoteHistory', component:quoteHistoryComponent},
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},    
]