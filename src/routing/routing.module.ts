import { ProfileComponent } from './../app/components/profile/profile.component';
import { searchComponent } from './../app/search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Defining routes
const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: searchComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
