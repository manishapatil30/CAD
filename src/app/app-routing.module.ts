import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChefPrivacyPolicyComponent } from './chef-privacy-policy/chef-privacy-policy.component';
import { ChefCustomerPrivacyPolicyComponent } from './chef-customer-privacy-policy/chef-customer-privacy-policy.component';
import { ChefContractComponent } from './chef-contract/chef-contract.component';
import { AboutComponent } from './about/about.component';
import { CovidComponent } from './covid/covid.component';
const routes: Routes = [
  { path: '', redirectTo: '/home/terms_conditions', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      {
        path: 'terms_conditions', component: TermsandconditionsComponent
      },
      {
        path: 'privacy-policy', component: PrivacyPolicyComponent
      },
      {
        path: 'chef-privacy-policy', component: ChefPrivacyPolicyComponent
      },
      {
        path: 'chef-customer-privacy-policy', component: ChefCustomerPrivacyPolicyComponent
      },
      {
        path: 'chef-contract', component: ChefContractComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'covid-19', component: CovidComponent
      }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
