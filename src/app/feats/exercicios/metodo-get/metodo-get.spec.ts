import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoGet } from './metodo-get';

describe('MetodoGet', () => {
  let component: MetodoGet;
  let fixture: ComponentFixture<MetodoGet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetodoGet],
    }).compileComponents();

    fixture = TestBed.createComponent(MetodoGet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
