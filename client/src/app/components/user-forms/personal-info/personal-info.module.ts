import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [PersonalInfoComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule.forChild()
  ],
  exports: [PersonalInfoComponent]
})
export class PersonalInfoModule { }
