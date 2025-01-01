import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchasesComponent } from './my-purchases.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';

describe('MyPurchasesComponent', () => {
  let component: MyPurchasesComponent;
  let fixture: ComponentFixture<MyPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPurchasesComponent],
      imports: [AllSvgModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
