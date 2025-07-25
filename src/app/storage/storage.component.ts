import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {

  constructor(private cookie:CookieService){}

  sessionValue:string|any="";
  localValue:string|any="";
  cookieValue:string|any="";

  //Session Storage
  setSession(){
    sessionStorage.setItem('name','session');
    sessionStorage.setItem('pass','session123');
  }

  getSession(){
    this.sessionValue = sessionStorage.getItem('name');
  }

  removeSession(){
    sessionStorage.removeItem('pass');
  }

  clearSession(){
    sessionStorage.clear();
    this.sessionValue="";
  }

  //Local Storage
  setLocal(){
    localStorage.setItem('username','local');
    localStorage.setItem('password','local123');
  }

  getLocal(){
    this.localValue = localStorage.getItem('username');
  }

  removeLocal(){
    localStorage.removeItem('password');
  }

  clearLocal(){
    localStorage.clear();
    this.localValue="";
  }

    //Cookies
    setCookie(){
      this.cookie.set('token1', '12345');
      this.cookie.set('token2', 'xyz');
    }
  
    getCookie(){
      this.cookieValue = this.cookie.get('token1');
    }
  
    deleteCookie(){
      this.cookie.delete('token1');
      this.cookieValue = "";
    }

}
