import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegafonesLayoutComponent } from './megafones-layout.component';

describe('MegafonesLayoutComponent', () => {
  let component: MegafonesLayoutComponent;
  let fixture: ComponentFixture<MegafonesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegafonesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MegafonesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
