import { Component } from '@angular/core'
import { Router } from '@angular/router'
@Component({
  templateUrl: `./profile.component.html`,
  styles: [`
  em {float:right; color:#E05c65; padding-left:10px;},
  .error input {background-color: #E3C3C5 !important;},
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999};
  .error : -moz-placeholder {color: #999;}
  .error :ms-input-placeholder {color: #999;}
`]
})

export class ProfileComponent{
  
  public fullName!: any 
  public address1!: any 
  public address2?: any 
  public city!: any 
  public state!: any 
  public zip!: any 
  constructor( private router:Router){}
  

  

  cancel()
  {
    this.router.navigate(['/'])
  }

  saveProfile(formValues:any)
  {
    
      console.log(formValues.value)
      this.router.navigate(['/'])
    //   this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    //   .subscribe( () => {
    //     this.toastr.success("Profile Saved!!");
    //   })
  }

  logOut()
  {
    // this.authService.logOut().subscribe( () => 
    // {
    //   this.router.navigate(['user/login']);
    // })
  }

}