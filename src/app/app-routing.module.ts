import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { OrganizationComponent } from './organization/organization.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';


const routes: Routes = [
 { path: '', component: SecurityComponent},
 { path: 'signup', component: SignUpComponent},
 { path: 'signin', component: SignInComponent},
 { path: 'organization', component: OrganizationComponent},
 { path: 'customer', component: CustomerComponent},
 { path: 'customer/dashboard/:id/:name', component: CustomerDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
