import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'app-view-user',
  imports: [ReusableComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent implements OnInit{

  userData : any;
  userId : {uid:number} | any;
  parentProperty:string="View-User, Please View the user details";

  constructor(private crud:CrudService, private activateRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.userId = {
      uid:this.activateRoute.snapshot.params['id']
    }
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
    })
  }

  onClose(){
    this.router.navigateByUrl('crud');
  }
}
