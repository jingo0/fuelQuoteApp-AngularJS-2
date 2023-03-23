import { Routes } from "@angular/router";


export const appRoutes:Routes = [
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},    
]