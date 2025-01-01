import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertEmailComponent } from './insert-email.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InsertEmailComponent', () => {
  let component: InsertEmailComponent;
  let fixture: ComponentFixture<InsertEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertEmailComponent],
      imports: [AllSvgModule, HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
