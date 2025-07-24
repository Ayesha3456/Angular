import { Component, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgforVsForComponent } from "./structural-directive-ngfor-vs-for/structural-directive-ngfor-vs-for.component";
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    // LinkedSignalComponent
    //SignalsComponent
    //DataBindingComponent, DirectivesComponent, StructuralDirectiveNgifVsIfComponent, StructuralDirectiveNgforVsForComponent, StructuralDirectiveNgswitchVsSwitchComponent, 
    // AttributeDirectivesComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}
