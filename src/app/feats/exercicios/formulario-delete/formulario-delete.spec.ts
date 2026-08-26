import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDelete } from './formulario-delete';

describe('FormularioDelete', () => {
  let component: FormularioDelete;
  let fixture: ComponentFixture<FormularioDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
