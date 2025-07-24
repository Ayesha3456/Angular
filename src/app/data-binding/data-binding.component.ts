import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  public name: string = "Ayesha";
  public topic: string = "Data Binding";
  public image: string = "https://yt3.googleusercontent.com/vINqDB-qIwSbTAKWlu1ZzN8-AtMIjLq92AMtNO2aBuVrnhECRcEmca8gjKHmrV8sMypEgZib=s120-c-k-c0x00ffffff-no-rj";
  public random = "";


  onSave() {
    alert("Data Saved Successfully")
  }

  onChange() {
    alert("Country Has Changed")
  }
}
