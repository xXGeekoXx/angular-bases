import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  public heroList: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Hawkeye"];
  public lastHero?: string;

  deleteHero(): void {
    this.lastHero = this.heroList.pop();
  }

  restoreList() {
    this.heroList = ["Spiderman", "Ironman", "Hulk", "Thor", "Hawkeye"];
    this.lastHero = '';
  }
  
}
