import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPut } from './formulario-put';

describe('FormularioPut', () => {
  let component: FormularioPut;
  let fixture: ComponentFixture<FormularioPut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPut],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioPut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
