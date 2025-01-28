import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatedProductInfoComponent } from './user-created-product-info.component';

describe('UserCreatedProductInfoComponent', () => {
  let component: UserCreatedProductInfoComponent;
  let fixture: ComponentFixture<UserCreatedProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCreatedProductInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCreatedProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
