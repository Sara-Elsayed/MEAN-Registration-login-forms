import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

import listsEn from '../../../../assets/i18n/listsEn.json';
import  { Country } from '../../../models/country.model';



@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
   
  Countries:Country[] = listsEn.Countries;

  constructor() {
    // console.log(countries.Countries)

  }
 
  
  ngOnInit() {

  }

}
