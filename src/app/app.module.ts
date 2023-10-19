import { CharacterListComponent } from './core/characterList/characterList.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [		
    AppComponent,
      CoreComponent,
      CharacterListComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
