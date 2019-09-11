import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
