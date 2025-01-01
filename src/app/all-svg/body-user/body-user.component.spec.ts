import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyUserComponent } from './body-user.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BodyUserComponent', () => {
  let component: BodyUserComponent;
  let fixture: ComponentFixture<BodyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyUserComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
