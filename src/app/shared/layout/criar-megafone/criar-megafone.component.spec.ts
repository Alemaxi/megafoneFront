import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMegafoneComponent } from './criar-megafone.component';

describe('CriarMegafoneComponent', () => {
  let component: CriarMegafoneComponent;
  let fixture: ComponentFixture<CriarMegafoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarMegafoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarMegafoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
