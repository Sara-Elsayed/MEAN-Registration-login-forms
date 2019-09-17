import { Component } from '@angular/core';
import { LanguageService } from './shared/services/language.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'RootsProject';
  constructor(private languageService: LanguageService) {
    //set language to english when the appliation starts
    let lang = localStorage.getItem('lang')
    if (!lang) {
      this.languageService.changeLanguage('en')
    }else{
      this.languageService.changeLanguage(lang)

    }
   }
  changeLang(lang){
    this.languageService.changeLanguage(lang);
  }

}
