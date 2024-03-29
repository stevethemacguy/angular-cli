import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { animate, state, style, transition, trigger } from '@angular/animations';

//import { catchError, filter, finalize, map, switchMap, take, tap } from 'rxjs/operators';
//import { BehaviorSubject, Subscription, EMPTY, throwError, of as observableOf, Observable, of} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [
    trigger('toggleModel', [
      state('closed', style({
        opacity: 0
      })),
      state('open',   style({
        opacity: 1
      })),
      transition('closed <=> open', animate('400ms ease-in')),
    ])
  ],
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // Whether the modal is open or closed
  modalState = 'closed';
  addCompanyModal: NgbModalRef;
  // Ng-Select elements
  carriers: any[];
  selectedCarrier: string;
  selectedCarriers = 'UPS, Fedex, DHL';

  // To use the calendar
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.carriers = [];

    // this.ranges.push({label: 'Preset Date', value: null});
    this.carriers.push({label: 'UPS', value: 'ups'});
    this.carriers.push({label: 'FedEx', value: 'fedex'});

    this.selectedCarrier = ''; // Use 'ups' to select something by default

    // See "Change Detection" section at https://github.com/ng-select/ng-select
    this.carriers = [...this.carriers];
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
