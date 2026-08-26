import { TestBed } from '@angular/core/testing';

import { ServiceDelete } from './service-delete';

describe('ServiceDelete', () => {
  let service: ServiceDelete;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDelete);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
