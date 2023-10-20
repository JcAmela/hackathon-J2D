import { CharacterComponent } from './core/character/character.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './core/character/filter/filter.component';
import { ListComponent } from './core/character/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
      CoreComponent,
      CharacterComponent,
      FilterComponent,
      ListComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }