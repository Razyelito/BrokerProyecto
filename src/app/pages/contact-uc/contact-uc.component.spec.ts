import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUCComponent } from './contact-uc.component';

describe('ContactUCComponent', () => {
  let component: ContactUCComponent;
  let fixture: ComponentFixture<ContactUCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
