import { Component } from '@angular/core'
import { Router } from '@angular/router';

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

    constructor(private router:Router)
    {
        
    }

    login(formVal: { userName: string; password: string })
    {
        this.userLoggedIn = true;
        console.log(formVal)
        this.router.navigate(['/'])
    }

    cancel()
    {
        this.router.navigate(['/'])
    }
    
}