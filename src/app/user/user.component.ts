import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    // used for component input property
    console.log("1.NgOnChanges is called");
  }

  ngOnInit(): void {
    // used for API calls
    console.log("2.NgOnInit is called");
  }

  ngDoCheck(): void {
    // used for every change detection
    console.log("3.NgDoCheck is called");
  }

  ngAfterContentInit(): void {
    // used for ngcontent
    console.log("4.ngAfterContentInit is called");
  }

  ngAfterContentChecked(): void {
    // used for 
    console.log("5.ngAfterContentChecked is called");
  }

  ngAfterViewInit(): void {
    // used for view child, getting element view ref
    console.log("6.ngAfterViewInit is called");
  }

  ngAfterViewChecked(): void {
    console.log("7.ngAfterViewChecked is called");
  }

  ngOnDestroy(): void {
    console.log("8.ngOnDestroy is called");
  }

  loginData() {
    // user verification logic
    // this.router.navigateByUrl("structural-directive");
    this.router.navigate(['structural-directive']);
  }
}
