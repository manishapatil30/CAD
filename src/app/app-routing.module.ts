import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/terms_conditions', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      {
        path: 'terms_conditions', component: TermsandconditionsComponent
      }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
