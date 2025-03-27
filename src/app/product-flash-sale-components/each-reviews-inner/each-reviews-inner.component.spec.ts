import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachReviewsInnerComponent } from './each-reviews-inner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AllSvgModule } from '../../all-svg/all-svg.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('EachReviewsInnerComponent', () => {
  let component: EachReviewsInnerComponent;
  let fixture: ComponentFixture<EachReviewsInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [EachReviewsInnerComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(EachReviewsInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
