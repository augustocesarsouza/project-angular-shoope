import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddressUserComponent } from './view-address-user.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllSvgModule } from '../../../../all-svg/all-svg.module';

describe('ViewAddressUserComponent', () => {
  let component: ViewAddressUserComponent;
  let fixture: ComponentFixture<ViewAddressUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ViewAddressUserComponent],
    imports: [RouterTestingModule, AllSvgModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(ViewAddressUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
