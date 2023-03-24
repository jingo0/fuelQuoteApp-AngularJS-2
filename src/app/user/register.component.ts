import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector:"Resister",
    templateUrl: './register.component.html',
    styles: [`
        em { float:right; color:#E05c65; padding-left:100px;}
    `]
})

export class RegisterComponent 
{
    userName:any
    password:any
    mouseoverLogin:any
    loginInvalid: any = false
    userLoggedIn: boolean = false;

    constructor(private router:Router)
    {
        
    }

    Register(formVal: { userName: string; password: string })
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