import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBtnComponent } from './general-btn.component';

describe('GeneralBtnComponent', () => {
  let component: GeneralBtnComponent;
  let fixture: ComponentFixture<GeneralBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
