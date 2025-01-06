import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrl: './verify-password.component.scss'
})
export class VerifyPasswordComponent {

  constructor(private router: Router){
  }

  onClickInputVerifyWithPassword(){
    this.router.navigate(['/verify/password']);
  }
}
