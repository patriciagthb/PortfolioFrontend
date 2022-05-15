import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAcercaDeComponent } from './update-acerca-de.component';

describe('UpdateAcercaDeComponent', () => {
  let component: UpdateAcercaDeComponent;
  let fixture: ComponentFixture<UpdateAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAcercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
