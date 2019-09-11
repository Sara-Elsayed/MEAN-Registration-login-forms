import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [RegistrationComponent]
})
export class RegistrationModule { }
