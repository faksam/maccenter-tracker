import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../services/user.service';
import { TrackService } from '../services/track.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Track } from '../shared/models/track.model';
import { Device } from '../shared/models/device.model';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  device = new Track();
  devices: Track[] = [];
  isLoading = true;
  isEditing = false;


  addDeviceForm: FormGroup;
  job_card_no = new FormControl('', Validators.required);
  customer_name = new FormControl('', Validators.required);
  phone_no = new FormControl('', Validators.required);
  customer_address = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  date_registion = new FormControl('', Validators.required);
  serial_no = new FormControl('', Validators.required);
  machine_type = new FormControl('', Validators.required);
  device_details = new FormControl('', Validators.required);
  fault_reported = new FormControl('', Validators.required);
  other_details = new FormControl('', Validators.required);
  registered_by = new FormControl('', Validators.required);
  engineer_in_charge = new FormControl('', Validators.required);
  date_for_collection = new FormControl('', Validators.required);
  status = new FormControl('', Validators.required);


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private trackService: TrackService) { }

  ngOnInit() {
    this.getDevices();
    this.addDeviceForm = this.formBuilder.group({
      job_card_no: this.job_card_no,
      customer_name: this.customer_name,
      phone_no: this.phone_no,
      customer_address: this.customer_address,
      email: this.email,
      date_registion: this.date_registion,
      serial_no: this.serial_no,
      machine_type: this.machine_type,
      device_details: this.device_details,
      fault_reported: this.fault_reported,
      other_details: this.other_details,
      registered_by: this.registered_by,
      engineer_in_charge: this.engineer_in_charge,
      date_for_collection: this.date_for_collection,
      status: this.status,
    });
  }

  getDevices() {
    this.trackService.getDevices().subscribe(
      data => this.devices = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addDevice() {
    this.trackService.addDevice(this.addDeviceForm.value).subscribe(
      res => {
        this.devices.push(res);
        this.addDeviceForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(device: Device) {
    this.isEditing = true;
    this.device = device;
  }

  cancelEditing() {
    this.isEditing = false;
    this.device = new Device();
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the devices to reset the editing
    this.getDevices();
  }

  editDevice(device: Device) {
    this.trackService.editDevice(device).subscribe(
      () => {
        this.isEditing = false;
        this.device = device;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteDevice(device: Device) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.trackService.deleteDevice(device).subscribe(
        () => {
          const pos = this.devices.map(elem => elem._id).indexOf(device._id);
          this.devices.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }
}
