import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CrudService } from '../Services/crud.service';
import { ReusableComponent } from "../reusable/reusable.component";

@Component({
  selector: 'app-crud',
  imports: [CommonModule, ReusableComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit{

  apiData: Iuser[] = [];
  parentProperty:string="CRUD Operations : View the list of users";

  constructor(private crud:CrudService, private router:Router){}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.crud.getData().subscribe((res: any) => {
      this.apiData = res.Users || res;
    });
  }

  addNewUser(){
    this.router.navigateByUrl('adduser');
  }

  onUpdate(id:number){
    this.router.navigate(['updateuser', id]);
  }

  onView(id:number){
    this.router.navigate(['viewuser', id]);
  }

  onDelete(id:number){
    this.crud.deleteData(id).subscribe(res => {
      alert("Record Deleted Successfully!");
      this.getAllData();
    })
  }
}
