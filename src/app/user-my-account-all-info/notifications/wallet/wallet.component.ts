import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.component.html',
    styleUrl: './wallet.component.scss',
    standalone: false
})
export class WalletComponent {

  constructor(private router: Router){
  }
}
