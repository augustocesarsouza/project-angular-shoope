import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainComponent } from './header-main.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { HeaderSecondComponent } from '../header-second/header-second.component';
import { HeaderFirstComponent } from '../header-first/header-first.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageModule } from '../home-page.module';

describe('HeaderMainComponent', () => {
  let component: HeaderMainComponent;
  let fixture: ComponentFixture<HeaderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMainComponent, HeaderFirstComponent,
        HeaderSecondComponent
  ],
      imports: [AllSvgModule, RouterTestingModule, HomePageModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
