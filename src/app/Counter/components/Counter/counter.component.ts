import { Component } from '@angular/core';


@Component({
    selector: "app-counter-component",
    templateUrl: './counter.component.html'

    
})
export class CounterComponent {

    public counter: number = 10;

    Increaseby(value:number): void {
        this.counter += value;
      }
    
      Reset(): void {
        this.counter = 10;
      }
    

}