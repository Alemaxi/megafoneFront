import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmMegafoneComponent } from './cadastrar-em-megafone.component';

describe('CadastrarEmMegafoneComponent', () => {
  let component: CadastrarEmMegafoneComponent;
  let fixture: ComponentFixture<CadastrarEmMegafoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CadastrarEmMegafoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEmMegafoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
