import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Device } from '../shared/models/device.model';
import { Track } from '../shared/models/track.model';


@NgModule({
  imports: [ HttpModule ]
})

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getDevice(device: Device): Observable<Device> {
    return this.http.get<Device>(`/api/device/${device._id}`);
  }

}
