import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './Counter/counter.module';
import { HeroesModule } from './Heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CounterModule,
    HeroesModule,
    BrowserModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
