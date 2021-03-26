import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPrivacyPolicyComponent } from './chef-privacy-policy.component';

describe('ChefPrivacyPolicyComponent', () => {
  let component: ChefPrivacyPolicyComponent;
  let fixture: ComponentFixture<ChefPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
