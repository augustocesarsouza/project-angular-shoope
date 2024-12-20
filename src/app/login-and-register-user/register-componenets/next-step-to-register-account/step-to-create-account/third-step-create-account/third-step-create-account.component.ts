import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-step-create-account',
  templateUrl: './third-step-create-account.component.html',
  styleUrl: './third-step-create-account.component.scss'
})
export class ThirdStepCreateAccountComponent {
  @Input() valueNumberPhoneCreate!: string;

  constructor(private router: Router){}

  clickBackToShoope(){
    this.router.navigate(['/buyer/login']);
  }
}
