import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { HomeComponent } from '../../../../home-page/home/home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GetUserPerfilService } from '../../../../login-and-register-user/service/get-user-perfil.service';
import { HeaderMainComponent } from '../../../../home-page/header-main/header-main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent, HomeComponent, HeaderMainComponent],
      imports: [AllSvgModule, RouterTestingModule],
      providers: [GetUserPerfilService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
