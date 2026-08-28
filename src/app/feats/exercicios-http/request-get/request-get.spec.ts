import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestGet } from './request-get';

describe('RequestGet', () => {
  let component: RequestGet;
  let fixture: ComponentFixture<RequestGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestGet],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestGet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
