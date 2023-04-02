import { Injectable } from "@angular/core";
import { IUserCred } from "./user.model";

@Injectable()
export class AuthService{
    currentUser!: IUserCred;
    
    
    constructor(){}

    loginUser()
    {
        this.currentUser ={
            userName: "ejnvjnejkv",
            password: "envnenvjken",
        }
    }
    

    isAuthenticated()
    {
        return !this.currentUser
    }
}