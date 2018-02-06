import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-search-device',
  templateUrl: './search-device.component.html',
  styleUrls: ['./search-device.component.css']
})
export class SearchDeviceComponent implements OnInit {

  searchForm: FormGroup;

  search_input = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public toast: ToastComponent,
    public searchService: SearchService,
    public auth: AuthService) { }

    ngOnInit() {
      this.searchForm = this.formBuilder.group({
        search_input: this.search_input,
        search: this.search
      });
    }

    search() {
      this.searchService.getDevice(this.searchForm.value).subscribe(
        res => {
          this.toast.setMessage('found your device!', 'success');
          //this.router.navigate(['/login']);
        },
        error => this.toast.setMessage('device not found', 'danger')
      );
    }

}
