import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
