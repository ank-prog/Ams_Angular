import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchInformationComponent } from './dispatch-information.component';

describe('DispatchInformationComponent', () => {
  let component: DispatchInformationComponent;
  let fixture: ComponentFixture<DispatchInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
