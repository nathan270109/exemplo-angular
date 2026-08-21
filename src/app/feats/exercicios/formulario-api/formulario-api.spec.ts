import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioApi } from './formulario-api';

describe('FormularioApi', () => {
  let component: FormularioApi;
  let fixture: ComponentFixture<FormularioApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioApi],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
