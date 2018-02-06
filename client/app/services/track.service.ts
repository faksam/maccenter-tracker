import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Device } from '../shared/models/device.model';
import { Track } from '../shared/models/track.model';

@Injectable()
export class TrackService {

  constructor(private http: HttpClient) { }

  register(device: Device): Observable<Device> {
    return this.http.post<Device>('/api/device', device);
  }
//track
  track(device: Device): Observable<Device> {
    return this.http.post<Device>('/api/device', device);
  }
  
  search(deviceJobNo): Observable<any> {
    console.log("in search: "+deviceJobNo);
    console.log(deviceJobNo);
    return this.http.post<any>('/api/track', deviceJobNo);
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>('/api/devices');
  }

  countDevices(): Observable<number> {
    return this.http.get<number>('/api/devices/count');
  }

  addDevice(device: Device): Observable<Device> {
    return this.http.post<Device>('/api/device', device);
  }

  getDevice(device: Device): Observable<Device> {
    return this.http.get<Device>(`/api/device/${device._id}`);
  }

  editDevice(device: Device): Observable<string> {
    return this.http.put(`/api/device/${device._id}`, device, { responseType: 'text' });
  }

  deleteDevice(device: Device): Observable<string> {
    return this.http.delete(`/api/device/${device._id}`, { responseType: 'text' });
  }

//   getUsers(searchCriteria:any) : Observable<User[]>{
//     let params: URLSearchParams = new URLSearchParams();
//     params.set('name', searchCriteria);

//     return this.http.get("http://localhost:3000/getUsers", { searchu: params })
//             .map((res:any) => {
//                 return res.json();
//             })
//             .catch((error:any) => {
//                 return Observable.throw(error.json ? error.json().error : error || 'Server error')
//             }); 
// }

}
