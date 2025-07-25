import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
angularPipes: string = 'Use pipes to format data in angular templates'
personData = {
  name: 'John',
  age: 20,
  city: 'Mumbai'
}
currentDate: Date = new Date;
items = of(['Apple','Banana','Mango']);
mobileNumber: any = null;
}
