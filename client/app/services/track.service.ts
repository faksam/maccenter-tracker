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

  login(credentials): Observable<any> {
    return this.http.post<any>('/api/track', credentials);
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

}
