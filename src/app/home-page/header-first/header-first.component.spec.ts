import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFirstComponent } from './header-first.component';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { DownloadAppFloatingComponent } from '../download-app-floating/download-app-floating.component';
import { NameUserFloatingComponent } from '../name-user-floating/name-user-floating.component';
import { LanguageFloatingComponent } from '../language-floating/language-floating.component';
import { NotificationFloatingComponent } from '../notification-floating/notification-floating.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderFirstComponent', () => {
  let component: HeaderFirstComponent;
  let fixture: ComponentFixture<HeaderFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderFirstComponent, DownloadAppFloatingComponent, NameUserFloatingComponent,
        LanguageFloatingComponent, NotificationFloatingComponent
      ],
      imports: [AllSvgModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
