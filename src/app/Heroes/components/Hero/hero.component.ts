import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  
  public name: string = "Ironman";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } -  ${ this.age }`;
  }

  changeName(): void {
    ( this.name === "Ironman" ) ? (this.name = "Spiderman") : (this.name = "Ironman");
  }

  changeAge(): void {
    ( this.age === 45 ) ? (this.age = 27) : (this.age = 45);
  }

  reset(): void {
    this.name = "Ironman";
    this.age = 45;
  }
  
}
