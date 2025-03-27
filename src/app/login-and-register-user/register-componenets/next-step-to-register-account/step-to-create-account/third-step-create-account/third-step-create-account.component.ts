import {  Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-third-step-create-account',
    templateUrl: './third-step-create-account.component.html',
    styleUrl: './third-step-create-account.component.scss',
    standalone: false
})
export class ThirdStepCreateAccountComponent implements OnInit {
  @Input() valueNumberPhoneCreate!: string;
  counter = 5;


  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.valueNumberPhoneCreate = "+55 67 981145503";
  }

  startCountdown(): void {
    const interval = setInterval(() => {
      this.counter--; // Decrementa o contador

      if (this.counter <= 0) {
        clearInterval(interval); // Limpa o intervalo quando o contador chega a zero
      }
    }, 1000); // Atualiza o contador a cada 1 segundo
  }

  clickBackToShoope(){
    this.router.navigate(['/buyer/login']);
  }
}
