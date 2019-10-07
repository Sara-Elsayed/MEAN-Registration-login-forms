import { Component, OnInit } from '@angular/core';
import { ChangeNavbarColor } from 'src/app/shared/services/changeNavbarColor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor( private navbarColor:ChangeNavbarColor){
   this.navbarColor.changeNavbarColor.next('transparent');
 }
  
 ngOnInit() {
  }
  
}
