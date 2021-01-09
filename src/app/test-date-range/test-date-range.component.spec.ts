import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDateRangeComponent } from './test-date-range.component';

describe('TestDateRangeComponent', () => {
  let component: TestDateRangeComponent;
  let fixture: ComponentFixture<TestDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
