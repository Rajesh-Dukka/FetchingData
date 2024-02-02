import { Component } from '@angular/core';
import { APIservicesService } from './apiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fdata: any = '';
  errmsg = '';
  constructor(private service: APIservicesService) {}
  getdata() {
    this.service.fetchdata().subscribe(
      (res: any) => (this.fdata = res),
      (err) => (this.errmsg = err)
    );
  }
}
