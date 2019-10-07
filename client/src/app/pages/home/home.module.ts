import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from '../../components/login';
import { RegistrationComponent } from '../../components/registration';


@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        RegistrationComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [HomeComponent]
})

export class HomeModule {}