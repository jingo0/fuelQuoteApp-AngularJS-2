import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
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

export class ProfileComponent implements OnInit{
  
  profileForm!: FormGroup
  public firstName!: FormControl
  public lastName!: FormControl
  constructor( private router:Router){}
  

  ngOnInit(): void {
    // this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    // this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName :this.firstName,
      lastName: this.lastName
  })
  } 

  cancel()
  {
    this.router.navigate(['/'])
  }

  saveProfile(formValues:any)
  {
    if(this.profileForm.valid)
    {
    //   this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    //   .subscribe( () => {
    //     this.toastr.success("Profile Saved!!");
    //   })
      
    }
  }

  validateFullName() : boolean
  {
    return this.firstName?.valid || this.firstName?.untouched
  }

  validateAddress() : boolean
  {
    return this.lastName?.valid || this.lastName?.untouched
  }

  logOut()
  {
    // this.authService.logOut().subscribe( () => 
    // {
    //   this.router.navigate(['user/login']);
    // })
  }

}