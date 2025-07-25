import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {

  textColor: string = 'text-success';
  isTextGreen: boolean = false;
  userClass: string = '';
  styleColor: string = "orange";
  isTextOrange: boolean = false;
  customClass: any = {
    'color': 'yellow',
    'height': '150px',
    'width': '400px',
    'border': '1px solid black'
  };

  changeColor(color:string) {
    this.textColor = color;
  }

  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }
}
