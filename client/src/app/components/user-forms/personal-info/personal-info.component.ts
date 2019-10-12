import { Component, OnInit } from '@angular/core';

import listsEn from '../../../../assets/i18n/listsEn.json';
import  { Country } from '../../../models/country.model';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';



@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
   
  CountriesObjects:Country[] = listsEn.Countries;
  Countrieslist:Array<string> = []
  Countries:Array<string> ;
  public browserLang: string;

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(event=>{
      this.browserLang = event.lang;
      if (this.browserLang === "en"){
        console.log(this.browserLang)
        this.CountriesObjects.forEach(element => {
          this.Countrieslist.push(element.nationality_english)   
        });
       this.Countries = this.Countrieslist;
      }else{
        this.CountriesObjects.forEach(element => {
          this.Countrieslist.push(element.nationality_arabic)
        });
       this.Countries = this.Countrieslist;
      }
    })
  }

  ngOnInit() {}

}
