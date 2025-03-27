import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-full-check-password',
    templateUrl: './full-check-password.component.html',
    styleUrl: './full-check-password.component.scss',
    standalone: false
})
export class FullCheckPasswordComponent implements AfterViewInit, OnDestroy {
  settimeOutArray: number[] = [];

  constructor(private router: Router){
  }

  ngAfterViewInit(): void {
    const value = setTimeout(() => {
      this.router.navigate(['/user/account/password']);

    }, 2000) as unknown as number;

    this.settimeOutArray.push(value);
  }

  ngOnDestroy(): void {
    this.settimeOutArray.forEach((timeoutId) => clearTimeout(timeoutId));
  }
}
