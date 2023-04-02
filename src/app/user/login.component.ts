import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector:"login",
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color:#E05c65; padding-left:100px;}
    `]
})

export class LoginComponent 
{
    userName:any
    password:any
    mouseoverLogin:any
    loginInvalid: any = false
    userLoggedIn: boolean = false

    constructor(private router:Router, private authServ:AuthService)
    {
        
    }

    login(formVal: { userName: string; password: string })
    {
        this.authServ.loginUser();
        console.log(formVal)
        this.router.navigate(['/'])
    }

    cancel()
    {
        this.router.navigate(['/'])
    }
    
}