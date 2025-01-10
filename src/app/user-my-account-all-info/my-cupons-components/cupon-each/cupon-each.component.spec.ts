import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponEachComponent } from './cupon-each.component';

describe('CuponEachComponent', () => {
  let component: CuponEachComponent;
  let fixture: ComponentFixture<CuponEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuponEachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuponEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
