import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegafonesComponent } from './megafones.component';

describe('MegafonesComponent', () => {
  let component: MegafonesComponent;
  let fixture: ComponentFixture<MegafonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegafonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegafonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
