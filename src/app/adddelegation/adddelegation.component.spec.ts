import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddelegationComponent } from './adddelegation.component';

describe('AdddelegationComponent', () => {
  let component: AdddelegationComponent;
  let fixture: ComponentFixture<AdddelegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddelegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
