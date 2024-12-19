import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-to-login-and-register',
  templateUrl: './header-to-login-and-register.component.html',
  styleUrl: './header-to-login-and-register.component.scss'
})
export class HeaderToLoginAndRegisterComponent {
  @Input() valueToSpan: string = 'Entre';

}
