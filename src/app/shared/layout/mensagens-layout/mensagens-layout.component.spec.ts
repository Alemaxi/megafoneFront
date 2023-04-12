import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensLayoutComponent } from './mensagens-layout.component';

describe('MensagensLayoutComponent', () => {
  let component: MensagensLayoutComponent;
  let fixture: ComponentFixture<MensagensLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagensLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagensLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
