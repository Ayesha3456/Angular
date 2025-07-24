import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http:HttpClient) { }

  base_url : string = "https://fake-store-api.mock.beeceptor.com";

  // getAllData(){
  //   return this.http.get(`${this.base_url}/api/users`);
  // }

  // Can be used for async operations that returns observables
  rxResourceData = rxResource({
    loader : () => this.http.get(`${this.base_url}/api/users`)
  })

  // Can be used for async operations that returns promises
  resourceData = resource({
    loader : () => fetch(`${this.base_url}/api/users`).then(res => res.json() as Promise<any>)
  })
}
