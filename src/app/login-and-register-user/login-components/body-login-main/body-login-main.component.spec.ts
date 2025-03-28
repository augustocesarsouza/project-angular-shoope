import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyLoginMainComponent } from './body-login-main.component';
import { AllSvgModule } from '../../../all-svg/all-svg.module';
import { UserService } from '../../service/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('BodyLoginMainComponent', () => {
  let component: BodyLoginMainComponent;
  let fixture: ComponentFixture<BodyLoginMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [BodyLoginMainComponent],
    imports: [AllSvgModule, RouterTestingModule],
    providers: [UserService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(BodyLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
