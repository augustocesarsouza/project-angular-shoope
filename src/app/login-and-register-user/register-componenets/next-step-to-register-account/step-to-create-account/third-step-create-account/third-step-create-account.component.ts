import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-third-step-create-account',
  templateUrl: './third-step-create-account.component.html',
  styleUrl: './third-step-create-account.component.scss'
})
export class ThirdStepCreateAccountComponent {
  @Input() valueNumberPhoneCreate!: string;

  constructor(){}
}
