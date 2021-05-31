import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss']
})
export class AuthComponentComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public PostData = {
    em :'',
    pass:''
  }

  status : any
  errorText = ''
  help = 'any password & any email should work.'

  ngOnInit(): void {
  }


  logAction() {
    if ( this.PostData.em && this.PostData.pass ) {
      this.errorText = '';
      if(this.authService.login(this.PostData)){
        this.router.navigate([''])
      }
    } else {
      this.errorText = 'Please give your correct credentials ! '
    }
  }
  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successfully !!')
        this.status = this.authService.isAuth;
        this.router.navigate(['appareils'])
      }
    )
  }

  onSignOut() {
    this.authService.signOut();
    this.status = this.authService.isAuth
  }

}
