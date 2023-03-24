import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";


export const appRoutes:Routes = [
    { path: '', component:WelcomeComponent},
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},    
]