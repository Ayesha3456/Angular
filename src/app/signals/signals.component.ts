import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

normalCounter = 0;
counter = signal(0);
center: any;
// counter: WritableSignal<number> = signal(0);

constructor(){
  this.counter.set(5);
  // setTimeout(() => {
  //   // this.normalCounter = 50;
  //   this.counter.set(30);
  //   console.log(this.counter);
  // }, 5000)

  effect(() => console.log('The value of counter is : ' + this.counter));
}

onIncrement(){
  this.counter.update(initialValue => initialValue + 1)
}
}
