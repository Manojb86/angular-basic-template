import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrgDashboardComponent } from './organization/org-dashboard/org-dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    OrganizationComponent,
    OrgDashboardComponent,
    CustomerComponent,
    CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
