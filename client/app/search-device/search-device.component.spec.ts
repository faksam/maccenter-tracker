import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeviceComponent } from './search-device.component';

describe('SearchDeviceComponent', () => {
  let component: SearchDeviceComponent;
  let fixture: ComponentFixture<SearchDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
