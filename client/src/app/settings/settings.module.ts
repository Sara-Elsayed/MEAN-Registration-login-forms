import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from './settings.component';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ]
})
export class SettingsModule { }
