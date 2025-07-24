import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../Services/shared-data.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  dummyData: any;
  isEligible: boolean;
  apiData: any;

  constructor(public _sharedData: SharedDataService){
    this.dummyData = this._sharedData.userData;

    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._sharedData.getUserData().subscribe(res=>{
      this.apiData = res;
    })
  }

  // userData = {
  //   id: 1,
  //   name: 'John',
  //   username: 'john',
  //   email: 'john@gmail.com'
  // }
}
