import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  addCompanyModal: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showAddCompanyModel(content: any) {
    this.addCompanyModal = this.modalService.open(content, {
      windowClass: 'loj-bootstrap-modal add-company-modal',
      backdrop: false
    });

    // Handle closing the modal
    this.addCompanyModal.result.then(
      // Model closed with .close() (i.e. a button)
      () => {
        // Do Nothing
      },
      // Model closed with backdrop click or Escape Key
      () => {
        // Do Nothing
      });
  }

  closeAddCompanyModal = () => {
    let someData = 'you closed the Add Company model';
    // modalRef is an NgbModalRef. Returns some data when the model is closed.
    if (this.addCompanyModal !== null) {
      this.addCompanyModal.close(someData);
    }
    // If you opened a component directly, then this would give you access to the component.
    // this.modalRef.componentInstance
  };

}
