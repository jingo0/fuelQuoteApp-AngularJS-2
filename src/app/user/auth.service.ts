import { Injectable } from "@angular/core";
import { IUserCred } from "./user.model";

@Injectable()
export class AuthService{
    currentUser!: IUserCred ;
    constructor(){}
    

    isAuthenticated()
    {
        console.log(!!this.currentUser)
        return !!this.currentUser
    }
}