import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalComponent } from '../../components/modal/modal.component';
import { FormsComponent } from './forms.component';

import { PersonalInfoComponent } from '../../components/user-forms/personal-info/personal-info.component'

@NgModule({
    declarations:[
        ModalComponent,
        PersonalInfoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [FormsComponent]
})

export class FormsModule{}
