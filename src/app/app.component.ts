import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private auth : AuthService, private router: Router){}
  
  logOutAction() {
    if(this.auth.logout()){
      this.router.navigate(['login'])
    }
  }
}