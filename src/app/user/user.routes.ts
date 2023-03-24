import { LoginComponent } from "./login.component";
import { ProfileComponent } from "./profile.component";
import { RegisterComponent } from "./register.component";

export const userRoutes = [
    {   path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent}
]