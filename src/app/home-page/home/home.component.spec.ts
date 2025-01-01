import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderFirstComponent } from '../header-first/header-first.component';
import { HeaderSecondComponent } from '../header-second/header-second.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageModule } from '../home-page.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderFirstComponent, HeaderSecondComponent],
      imports: [AllSvgModule, RouterTestingModule, HomePageModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
