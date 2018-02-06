import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TrackService } from '../services/track.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Device } from '../shared/models/device.model';

@Component({
  selector: 'app-searchdevice',
  templateUrl: './searchdevice.component.html',
  styleUrls: ['./searchdevice.component.css']
})
export class SearchdeviceComponent implements OnInit {

  device = new Device();

  searchForm: FormGroup;
  job_order_no = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public toast: ToastComponent,
              private trackService: TrackService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      job_order_no: this.job_order_no,
    });
  }
  // getUsers(){
  //   this.userService.getUsers(this.searchCriteria)
  //   .subscribe(
  //     data => {
  //        this.users = [];
  //        data.forEach(
  //          element => {
  //            var newUser = new User(element._id, 
  //                               element.name, 
  //                               element.age,
  //                               element.location,
  //                               element.blog);
  //            this.users.push(newUser);
  //          })
  //     })
  // }

  setClassJobOrderNo() {
    return { 'has-danger': !this.job_order_no.pristine && !this.job_order_no.valid };
  }
  search() {
    this.trackService.search(this.searchForm.value).subscribe(
      
      res => {
        console.log("searchdevicecomponent: "+this.searchForm.value.job_order_no);
        this.toast.setMessage('you successfully found your search!', 'success');
        //this.router.navigate(['/']);
        this.device = res;
        console.log(this.device);
        console.log(res);
      },
      error => this.toast.setMessage('Job order no does not exist', 'danger')
    );
  }

}
