import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../Services/crud.service';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, ReusableComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  addUserForm:FormGroup;
  parentProperty:string="Add-User, Please add new users";

  constructor(private router:Router, private fb:FormBuilder, private crud:CrudService){
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: ['']
    })
  }

  onCancel(){
    this.router.navigateByUrl('crud')
  }

  onSubmit(){
    console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    })
  }
}
