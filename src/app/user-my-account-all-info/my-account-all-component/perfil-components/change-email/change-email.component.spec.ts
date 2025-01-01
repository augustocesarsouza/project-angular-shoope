import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmailComponent } from './change-email.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { UserService } from '../../../../login-and-register-user/service/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChangeEmailComponent', () => {
  let component: ChangeEmailComponent;
  let fixture: ComponentFixture<ChangeEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeEmailComponent],
      imports: [AllSvgModule, HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
