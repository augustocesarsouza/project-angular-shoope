import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainComponent } from './footer-main.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';
import { FirstFooterComponent } from '../first-footer/first-footer.component';
import { SecondFooterComponent } from '../second-footer/second-footer.component';
import { HeaderAndFooterForAllComponentsModule } from '../../../../header-and-footer-for-all-components/header-and-footer-for-all-components.module';

describe('FooterMainComponent', () => {
  let component: FooterMainComponent;
  let fixture: ComponentFixture<FooterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [FooterMainComponent, FirstFooterComponent, SecondFooterComponent],
    imports: [RouterTestingModule, AllSvgModule, HeaderAndFooterForAllComponentsModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(FooterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
