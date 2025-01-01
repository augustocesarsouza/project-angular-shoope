
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AllSvgModule } from './all-svg/all-svg.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AllSvgModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    // fixture = TestBed.createComponent(AppComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {  // Certifique-se de que há pelo menos um teste dentro de describe
    expect(component).toBeTruthy();
  });
});
