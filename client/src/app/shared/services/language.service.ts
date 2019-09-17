import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  
  

  constructor(private translateService: TranslateService) { }


  changeLanguage(lang){
    let dir;
    let html = document.documentElement;
    if(lang == 'en'){
      dir = 'ltr';
    }else{
      dir = 'rtl'
    }
    html.setAttribute('lang', lang);
    html.setAttribute('dir', dir);

    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    localStorage.setItem('lang',lang)
  }
}
