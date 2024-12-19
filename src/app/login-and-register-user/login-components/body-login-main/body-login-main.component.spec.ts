import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLoginMainComponent } from './body-login-main.component';

describe('BodyLoginMainComponent', () => {
  let component: BodyLoginMainComponent;
  let fixture: ComponentFixture<BodyLoginMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyLoginMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
