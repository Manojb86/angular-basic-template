import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { SignInComponent } from './security/sign-in/sign-in.component';
import { OrganizationComponent } from './organization/organization.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDashboardComponent } from './customer/dashboard/customer-dashboard.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { PageNotFoundComponent } from './security/page-not-found/page-not-found.component';


const routes: Routes = [
 { path: '', component: SecurityComponent},
 { path: 'signup', component: SignUpComponent},
 { path: 'signin', component: SignInComponent, redirectTo: ''},
 { path: 'organization', canActivate: [AuthGuardService] , component: OrganizationComponent},
 { path: 'customer', canActivate: [AuthGuardService] , component: CustomerComponent},
 { path: 'customer/dashboard/:id/:name', canActivate: [AuthGuardService], component: CustomerDashboardComponent},
 { path: '**', component: PageNotFoundComponent, data: {message: 'No page found in selected application path.'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
