import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCustomerPrivacyPolicyComponent } from './chef-customer-privacy-policy.component';

describe('ChefCustomerPrivacyPolicyComponent', () => {
  let component: ChefCustomerPrivacyPolicyComponent;
  let fixture: ComponentFixture<ChefCustomerPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefCustomerPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefCustomerPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
