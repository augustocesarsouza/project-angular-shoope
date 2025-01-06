import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseComponentsComponent } from './purchase-components.component';

describe('PurchaseComponentsComponent', () => {
  let component: PurchaseComponentsComponent;
  let fixture: ComponentFixture<PurchaseComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
