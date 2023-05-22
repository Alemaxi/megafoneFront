import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEsquerdoOperacoesComponent } from './menu-esquerdo-operacoes.component';

describe('MenuEsquerdoOperacoesComponent', () => {
  let component: MenuEsquerdoOperacoesComponent;
  let fixture: ComponentFixture<MenuEsquerdoOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MenuEsquerdoOperacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEsquerdoOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
