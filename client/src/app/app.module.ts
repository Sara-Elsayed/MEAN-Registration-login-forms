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
import { SettingsModule } from './settings/settings.module';
import { RegistrationModule } from './components/registration/registration.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent
  
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
