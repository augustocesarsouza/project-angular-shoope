import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyMainComponent } from './home-body-main.component';

describe('HomeBodyMainComponent', () => {
  let component: HomeBodyMainComponent;
  let fixture: ComponentFixture<HomeBodyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBodyMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
