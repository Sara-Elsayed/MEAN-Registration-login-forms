import { Component, OnInit } from '@angular/core';

import listsEn from '../../../../assets/i18n/listsEn.json';
import  { Country } from '../../../models/country.model';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
   
  personalInformationForm: FormGroup;
  CountriesObjects:Country[] = listsEn.Countries;
  Countrieslist:Array<string> = []
  Countries:Array<string> ;
  public browserLang: string;

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService) {}

  ngOnInit() {
    
    this.personalInformationForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      secondName: ['',Validators.required],
      thirdName: ['',Validators.required],
      fourthName: ['',Validators.required],
      lastName: ['',Validators.required],
      title: ['',Validators.required],
      gender: ['',Validators.required],
      nationality: ['',Validators.required]
    });

    this.translateService.onLangChange.subscribe(event=>{
      this.browserLang = event.lang;
      if (this.browserLang === "en"){
        this.Countrieslist=['choose'];
        this.CountriesObjects.forEach(element => {
          this.Countrieslist.push(element.nationality_english)  
        });
      }else{
        this.Countrieslist=[' اختر جنسيتك'];
        this.CountriesObjects.forEach(element => {
          this.Countrieslist.push(element.nationality_arabic)
        });
      }
      this.Countries = this.Countrieslist; 
    })
  }

  get f() { return this.personalInformationForm.controls};

}
