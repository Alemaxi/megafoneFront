import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMegafoneComponent } from './editar-megafone.component';

describe('EditarMegafoneComponent', () => {
  let component: EditarMegafoneComponent;
  let fixture: ComponentFixture<EditarMegafoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EditarMegafoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMegafoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
