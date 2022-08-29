import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImageNameUserComponent } from './list-image-name-user.component';

describe('ListImageNameUserComponent', () => {
  let component: ListImageNameUserComponent;
  let fixture: ComponentFixture<ListImageNameUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListImageNameUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListImageNameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
