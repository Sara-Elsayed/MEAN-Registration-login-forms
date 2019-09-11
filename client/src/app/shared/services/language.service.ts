import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  dir;
  html = document.documentElement;

  constructor(private translateService: TranslateService) { }


  changeLanguage(lang){
    if(lang == 'en'){
      this.dir = 'ltr';
    }else{
      this.dir = 'rtl'
    }

    this.html.setAttribute('lang', lang);
    this.html.setAttribute('dir', this.dir);

    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
