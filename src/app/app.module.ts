import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChefPrivacyPolicyComponent } from './chef-privacy-policy/chef-privacy-policy.component';
import { ChefCustomerPrivacyPolicyComponent } from './chef-customer-privacy-policy/chef-customer-privacy-policy.component';
import { ChefContractComponent } from './chef-contract/chef-contract.component';
import { AboutComponent } from './about/about.component';
import { CovidComponent } from './covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsandconditionsComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    ChefPrivacyPolicyComponent,
    ChefCustomerPrivacyPolicyComponent,
    ChefContractComponent,
    AboutComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
