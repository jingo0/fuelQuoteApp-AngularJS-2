import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers:[

    ]
})

export class UserModule{ }