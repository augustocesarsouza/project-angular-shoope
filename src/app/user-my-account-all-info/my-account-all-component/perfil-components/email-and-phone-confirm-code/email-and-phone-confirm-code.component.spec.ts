import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailAndPhoneConfirmCodeComponent } from './email-and-phone-confirm-code.component';


describe('EmailConfirmCodeComponent', () => {
  let component: EmailAndPhoneConfirmCodeComponent;
  let fixture: ComponentFixture<EmailAndPhoneConfirmCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailAndPhoneConfirmCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailAndPhoneConfirmCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
