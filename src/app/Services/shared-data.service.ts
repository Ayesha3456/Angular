import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor(private _http:HttpClient) { }

  API_URL = "https://jsonplaceholder.typicode.com/users";
  userData = {
    id: 1,
    name: 'John',
    username: 'john',
    email: 'john@yahoo.com',
    subscription : 'basic'
  }

  getUserData(){
    return this._http.get(this.API_URL);
  }

  isEligibleForSubscription(){
    if(this.userData.subscription == 'basic' && this.userData.email.endsWith('@gmail.com')) {
      return true;
    } else {
      return false;
    }
  }
}
