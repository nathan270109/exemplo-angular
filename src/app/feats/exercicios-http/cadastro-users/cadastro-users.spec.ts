import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsers } from './cadastro-users';

describe('CadastroUsers', () => {
  let component: CadastroUsers;
  let fixture: ComponentFixture<CadastroUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
