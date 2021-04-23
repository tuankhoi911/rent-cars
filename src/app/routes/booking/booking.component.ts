import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;
  constructor() {
    this.bookingForm = new FormGroup({
      carId: new FormControl(null),
      email: new FormControl(null),
      fullName: new FormControl(null),
      phoneNumber: new FormControl(null),
      receiveVehicle: new FormControl('home'),
      route: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    const req = {
      ...this.bookingForm.value,
      startDate: this.formatDate(this.bookingForm.value.startDate),
      endDate: this.formatDate(this.bookingForm.value.endDate),
    }
    console.log(req);
  }

  formatDate(date) {
    const raw = {
      ...date,
      month: date.month - 1,
    };
    const result = moment.utc(raw).toISOString();
    return result;
  }

}