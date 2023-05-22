import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMensagemLayoutComponent } from './cadastrar-mensagem-layout.component';

describe('CadastrarMensagemLayoutComponent', () => {
  let component: CadastrarMensagemLayoutComponent;
  let fixture: ComponentFixture<CadastrarMensagemLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CadastrarMensagemLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarMensagemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
