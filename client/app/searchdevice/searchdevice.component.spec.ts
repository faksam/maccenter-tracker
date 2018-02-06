import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdeviceComponent } from './searchdevice.component';

describe('SearchdeviceComponent', () => {
  let component: SearchdeviceComponent;
  let fixture: ComponentFixture<SearchdeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
