import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/angular-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http' ;


import { AppComponent } from './app.component';

import { LoginModule } from './components/login/login.module';
import { RegistrationModule } from './components/registration/registration.module';
import { SettingsModule } from './settings/settings.module';

import { CountryFormComponent } from './components/country-form/country-form.component';

import { PersonalInfoComponent } from './components/user-forms/personal-info/personal-info.component';
import { IdentityCardComponent } from './components/user-forms/identity-card/identity-card.component';

import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms';

import { ModalModule } from './components/modal';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,

    CountryFormComponent,
    PersonalInfoComponent,
    IdentityCardComponent,

    HomeComponent,
    FormsComponent,
    NavbarComponent
  
  ],
  imports: [
    LoginModule,
    RegistrationModule,
    SettingsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ModalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
