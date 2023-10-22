import { CharacterComponent } from './core/character/character.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './core/character/filter/filter.component';
import { ListComponent } from './core/character/list/list.component';
import { FormsModule } from '@angular/forms';
import { ParagraphComponent } from './core/character/paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
      CoreComponent,
      CharacterComponent,
      FilterComponent,
      ListComponent,
      ParagraphComponent,

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
