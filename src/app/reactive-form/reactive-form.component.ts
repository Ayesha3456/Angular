import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  reactiveForm: FormGroup;

  constructor(private fb:FormBuilder){
    // FORM GROUP
    // this.reactiveForm = new FormGroup({
    //   firstName : new FormControl(""),
    //   lastName : new FormControl(""),
    //   email : new FormControl(""),
    //   password : new FormControl(),
    //   isChecked : new FormControl(),
    //   address : new FormGroup({
    //     city : new FormControl(""),
    //     street : new FormControl(""),
    //     pincode : new FormControl()
    //   })
    // });

    // FORM BUILDER
    this.reactiveForm = this.fb.group({
      firstName : ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName : ['', [Validators.required, Validators.minLength(10)]],
      email : ['', [Validators.required, Validators.maxLength(15), Validators.email]],
      password : ['', [Validators.required]],
      isChecked : [''],
      address : this.fb.group({
        city : [''],
        street : [''],
        pincode : ['']
      }),
      skills: this.fb.array([])
    });
  }

  get skills():FormArray{
    return this.reactiveForm.get("skills") as FormArray;
  }

  newSkill():FormGroup{
    return this.fb.group({
      skill: ''
    })
  }

  addSkill(){
    this.skills.push(this.newSkill());
  }

  deleteSkill(i:number){
    this.skills.removeAt(i);
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
  }

  setAllValues(){
    this.reactiveForm.setValue({
      firstName:"Poonam",
      lastName : "Patel",
      email : "poonam@gmail.com",
      password : 1234,
      isChecked : true,
      address : {
        city : "Mumbai",
        street : "Charni Road",
        pincode : 400004
      }
    })
  }

  resetForm(){
    this.reactiveForm.reset();
    // this.reactiveForm.controls['firstName'].reset();
  }

  setPartialValues(){
    this.reactiveForm.patchValue({
      address : {
        city : "Mumbai",
        street : "Charni Road",
        pincode : 400004
      }
    })

    // this.reactiveForm.controls['firstName'].patchValue('Poonam');
  }

}
