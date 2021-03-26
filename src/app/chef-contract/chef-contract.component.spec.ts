import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefContractComponent } from './chef-contract.component';

describe('ChefContractComponent', () => {
  let component: ChefContractComponent;
  let fixture: ComponentFixture<ChefContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
