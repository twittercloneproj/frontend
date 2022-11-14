import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefeedComponent } from './homefeed/homefeed.component';

const routes: Routes = [
  { path: 'home', component: HomefeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
