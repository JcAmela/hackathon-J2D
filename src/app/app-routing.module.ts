import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './core/detail/detail.component';
import { CharacterComponent } from './core/character/character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
