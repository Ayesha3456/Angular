import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../Services/crud.service';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule, ReusableComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit{

  userId : {uid:number} | any; 
  parentProperty:string="Update-User, Please update the user data";

  userData : any;
  updateUserForm:FormGroup;

  constructor(private crud:CrudService, private activateRoute:ActivatedRoute, private router:Router, private fb:FormBuilder){

    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: ['']
    })
  }

  ngOnInit(): void {
    this.userId = {
      uid:this.activateRoute.snapshot.params['id']
    }
    console.log(this.userId.uid);

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;
      this.updateUserForm.setValue({id:this.userData.id, name:this.userData.name, username:this.userData.username, email:this.userData.email})
    })

  }

  onCancel(){
    this.router.navigateByUrl('crud');
  }

  onSubmit(){
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    })
  }
}
