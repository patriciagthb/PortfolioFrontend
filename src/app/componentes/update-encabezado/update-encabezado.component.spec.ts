import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEncabezadoComponent } from './update-encabezado.component';

describe('UpdateEncabezadoComponent', () => {
  let component: UpdateEncabezadoComponent;
  let fixture: ComponentFixture<UpdateEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEncabezadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
