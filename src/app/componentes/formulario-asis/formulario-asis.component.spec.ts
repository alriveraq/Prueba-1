import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAsisComponent } from './formulario-asis.component';

describe('FormularioAsisComponent', () => {
  let component: FormularioAsisComponent;
  let fixture: ComponentFixture<FormularioAsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
