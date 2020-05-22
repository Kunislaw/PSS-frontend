import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserDataComponent } from './user-data/user-data.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { DelegationsComponent } from './delegations/delegations.component';
import { AdddelegationComponent } from './adddelegation/adddelegation.component';


const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: UserDataComponent },
  { path: 'useredit', component: UserEditComponent},
  { path: 'delegations', component: DelegationsComponent},
  { path: 'adddelegation', component: AdddelegationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
