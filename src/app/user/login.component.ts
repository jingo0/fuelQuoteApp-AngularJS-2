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

    constructor()
    {
        
    }

    // login(formVal: { userName: string; password: string })
    // {
    //     this.authService.loginUser(formVal.userName, formVal.password).subscribe(resp => {
    //         if(!resp)
    //         {
    //             this.loginInvalid = true;
    //         }else
    //         {
    //             this.router.navigate(['events']);
    //         }
    //     })
    // }

    // cancel()
    // {
    //     this.router.navigate(['events'])
    // }
    
}