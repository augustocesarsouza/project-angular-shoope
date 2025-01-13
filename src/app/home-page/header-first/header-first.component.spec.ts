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

  const userLogged = {
    id:"573c597e-c95f-42fc-9b9c-47b79c5b99fc",
    name:"ascascas",
    email: "asdasd@gmail.com",
    phone: "(+55) 67 98114 5503",
    cpf: "29382392",
    birthDate: "1995-04-15 00:00:00.000",
    gender: "m",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIU",
    confirmEmail: 1,
    userImage: "https://res.cloudinary.com/dyqsqg7pk/image/upload/v1736691104/img-user/avatar-default_b1190a.png",
  }

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

    component.userLogged = userLogged;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all link first nav', () => {
    const linkFirstNav = fixture.nativeElement.querySelectorAll(".link-first-nav");
    expect(linkFirstNav.length).toEqual(3);
  });

  it('should render span follow us', () => {
    const spanFollowUs = fixture.nativeElement.querySelector(".container-follow-us span");
    expect(spanFollowUs.textContent).toBe("Siga-nos no");
  });

  it('should render all link container follow us', () => {
    const linkFollowUs = fixture.nativeElement.querySelectorAll(".container-follow-us a");
    expect(linkFollowUs.length).toEqual(3);
  });

  it('should render container svg header second all elements', () => {
    const containerSvgHeaderSecond = fixture.nativeElement.querySelectorAll(".container-svg-header-second");
    expect(containerSvgHeaderSecond.length).toBe(4);
  });

  it('should render svg and span notification', () => {
    const containerSvgHeaderSecond = fixture.nativeElement.querySelectorAll(".container-svg-header-second");

    const svgNotification = containerSvgHeaderSecond[0].querySelector("app-svg-notification");
    expect(svgNotification).not.toBeNull();

    const spanNotification = containerSvgHeaderSecond[0].querySelector("span");
    expect(spanNotification.textContent).toBe("Notificações");
  });

  it('should render svg and span help', () => {
    const containerSvgHeaderSecond = fixture.nativeElement.querySelectorAll(".container-svg-header-second");

    const svgHelp = containerSvgHeaderSecond[1].querySelector("app-svg-help");
    expect(svgHelp).not.toBeNull();

    const spanHelp = containerSvgHeaderSecond[1].querySelector("span");
    expect(spanHelp.textContent).toBe("Ajuda");
  });

  it('should render two svg and span language', () => {
    const containerSvgHeaderSecond = fixture.nativeElement.querySelectorAll(".container-svg-header-second");

    const svgLanguage = containerSvgHeaderSecond[2].querySelector("app-svg-language");
    expect(svgLanguage).not.toBeNull();

    const spanLanguage = containerSvgHeaderSecond[2].querySelector("span");
    expect(spanLanguage.textContent).toBe("Português - BR");

    const svgArrow= containerSvgHeaderSecond[2].querySelector("app-svg-arrow");
    expect(svgArrow).not.toBeNull();
  });

  it('should render svg user and name user', () => {
    const containerSvgHeaderSecond = fixture.nativeElement.querySelectorAll(".container-svg-header-second");

    const svgUserWithoutImg = containerSvgHeaderSecond[3].querySelector("app-svg-user-without-img");
    expect(svgUserWithoutImg).not.toBeNull();

    const spanLanguage = containerSvgHeaderSecond[3].querySelector("span");
    expect(spanLanguage.textContent).toBe(userLogged.name);
  });
});
