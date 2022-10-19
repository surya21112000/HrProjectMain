import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLeaveReqComponent } from './manage-leave-req.component';

describe('ManageLeaveReqComponent', () => {
  let component: ManageLeaveReqComponent;
  let fixture: ComponentFixture<ManageLeaveReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLeaveReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageLeaveReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
