import { TestBed } from '@angular/core/testing';

import { ArrayUsuarioService } from './array-usuario-service';

describe('ArrayUsuarioService', () => {
  let service: ArrayUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
