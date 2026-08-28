import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosHttp } from './exercicios-http';

describe('ExerciciosHttp', () => {
  let component: ExerciciosHttp;
  let fixture: ComponentFixture<ExerciciosHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciosHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciosHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
