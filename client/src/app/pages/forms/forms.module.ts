import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalComponent } from '../../components/modal/modal.component';
import { FormsComponent } from './forms.component';

import { PersonalInfoComponent } from '../../components/user-forms/personal-info/personal-info.component'
import { IdentityCardComponent } from 'src/app/components/user-forms/identity-card/identity-card.component';

@NgModule({
    declarations:[
        ModalComponent,
        PersonalInfoComponent,
        IdentityCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [FormsComponent]
})

export class FormsModule{}
