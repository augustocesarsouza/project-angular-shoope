import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrl: './wallet.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class WalletComponent {

  constructor(private router: Router){
  }
}
