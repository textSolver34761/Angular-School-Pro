import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth = false;

  signIn() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          this.isAuth = true;
          resolve(true);
        },200
      );
    });
    return promise;
  }

  signOut() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          this.isAuth = false;
          resolve(true);
        },200
      );
    });
    return promise;
  }


  public isAuthentificated() {
    const userData = sessionStorage.getItem('user');
    if(userData && userData.length > 0 ) {
      return true;
    } else {
      return false;
    }
  }

  public async login(_PostData:any) {
    const responseData = {
      "name":'Benjamin',
      "age":30,
      "Occupation":"developpeur"
    };
    await sessionStorage.setItem('user',JSON.stringify(responseData));
    return true;
  }

  public signup(_PostData:any){
    //
  }

  public async logout() {
    await sessionStorage.removeItem('user');
    await sessionStorage.clear();
    return true;
  }

}