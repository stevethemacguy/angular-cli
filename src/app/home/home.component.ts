import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  upsConnectionStatus: string;
  fedexConnectionStatus: string;
  dhlConnectionStatus: string;
  uspsConnectionStatus: string;
  otherConnectionStatus: string;

  constructor() { }

  ngOnInit() {
    this.upsConnectionStatus = 'Connected';
    this.fedexConnectionStatus = 'Connected';
    this.dhlConnectionStatus = 'Connection Failure';
    this.uspsConnectionStatus = 'Not Connected';
    this.otherConnectionStatus = 'Connection Coming Soon';
  }

  getStatusClass = (connectionStatus: string) => {
    if (connectionStatus === 'Connected') {
      return 'connected';
    }
    if (connectionStatus === 'Connection Failure') {
      return 'failure';
    }
    if (connectionStatus === 'Connection Coming Soon') {
      return 'disabled';
    }
    else {
      return 'disconnected';
    }
  };

  setStatusClass = (connectionType: string) => {
    switch (connectionType) {
      case 'ups':
        return this.getStatusClass(this.upsConnectionStatus);
      case 'fedex':
        return this.getStatusClass(this.fedexConnectionStatus);
      case 'dhl':
        return this.getStatusClass(this.dhlConnectionStatus);
      case 'usps':
        return this.getStatusClass(this.uspsConnectionStatus);
      default:
        return this.getStatusClass(this.otherConnectionStatus);
    }
  };
}
