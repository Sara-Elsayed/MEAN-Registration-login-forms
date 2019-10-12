import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ChangeNavbarColor } from '../../services/changeNavbarColor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'RootsProject';
  navColor = '';
  
  constructor(private languageService: LanguageService ,
    private navbarColorService: ChangeNavbarColor) {
   
      //set language to english when the appliation starts
    let lang = localStorage.getItem('lang')
    if (!lang) {
      this.languageService.changeLanguage('en')
    }else{
      this.languageService.changeLanguage(lang)

    }

    this.navbarColorService.changeNavbarColor.subscribe((color) => {
      this.navColor = color;
    })

   }
  changeLang(lang){
    this.languageService.changeLanguage(lang);
    //this.subject.next(lang)
  }
  

  ngOnInit() {
  }

}
