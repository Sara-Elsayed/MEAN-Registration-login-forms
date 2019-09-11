import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../shared/services/language.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
  }

  langaugeSelectHandler(selectValue){
    this.languageService.changeLanguage(selectValue);
  }

}
