import { TestBed } from '@angular/core/testing';

import { FormularioApiService } from './formulario-api-service';

describe('FormularioApiService', () => {
  let service: FormularioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
