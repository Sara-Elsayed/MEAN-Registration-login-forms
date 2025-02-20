import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login";
import { RegistrationComponent } from "./components/registration";
import { SettingsComponent } from "./settings/settings.component";

import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms';
import { PersonalInfoComponent } from './components/user-forms/personal-info';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home", component: HomeComponent,

    children: [
      { path: "", pathMatch: "full", redirectTo: "register" },
      { path: "register", component: RegistrationComponent },
      { path: "login", component: LoginComponent },
      { path: "settings", component: SettingsComponent },
    ]
  },
  { path : "forms", component: FormsComponent,
     children: [
    {path: "", pathMatch: "full", redirectTo: "personal-info"},
    {path: "personal-info", component: PersonalInfoComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
