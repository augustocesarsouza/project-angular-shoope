import { Component, Input } from '@angular/core';
import { Cupon } from '../../../login-and-register-user/interface/cupon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cupon-each',
    templateUrl: './cupon-each.component.html',
    styleUrl: './cupon-each.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class CuponEachComponent {
  @Input() objCupons!: Cupon;

  constructor(private router: Router){
  }

  formatDateString = () => {
    const date = this.objCupons.dateValidateCupon.split('T');
    const firstPartDate = date[0];

    const secondPartDate = firstPartDate.split('-');
    const stringFullDate = `Válido até: ${secondPartDate[2]}/${secondPartDate[1]}/${secondPartDate[0]}`;

    return stringFullDate;
  };
}
