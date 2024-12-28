import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillCpfAndBirthDateComponent } from './fill-cpf-and-birth-date.component';

describe('FillCpfAndBirthDateComponent', () => {
  let component: FillCpfAndBirthDateComponent;
  let fixture: ComponentFixture<FillCpfAndBirthDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillCpfAndBirthDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FillCpfAndBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
