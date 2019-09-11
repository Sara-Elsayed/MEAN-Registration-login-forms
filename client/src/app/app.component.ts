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
  constructor(private languageService: LanguageService, private translate: TranslateService) {
    //set language to english when the appliation starts
    this.languageService.changeLanguage('en');
   }

  changeLang(lang){
    this.translate.use(lang);
    this.languageService.changeLanguage(lang);
  }

}
