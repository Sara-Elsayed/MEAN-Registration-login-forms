import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ChangeNavbarColor } from 'src/app/shared/services/changeNavbarColor.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor(private modalService: ModalService,
              private navbarColor: ChangeNavbarColor) { 
      this.navbarColor.changeNavbarColor.next("#305F72");
    }

  ngOnInit() {
    
  }

  openModal(id : string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

}
