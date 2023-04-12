import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPageUsuarioComponent } from './master-page-usuario.component';

describe('MasterPageUsuarioComponent', () => {
  let component: MasterPageUsuarioComponent;
  let fixture: ComponentFixture<MasterPageUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterPageUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterPageUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
