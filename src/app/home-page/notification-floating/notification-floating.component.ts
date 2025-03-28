import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notification-floating',
    templateUrl: './notification-floating.component.html',
    styleUrl: './notification-floating.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class NotificationFloatingComponent {
  @Input() handleShowContainerNotification!: (newValue: boolean) => void;
  @Input() clearNotificationTimeout!: () => void;
  @Input() showContainerNotification!: boolean;

  onMouseEnterNotificationFloating(){
    this.handleShowContainerNotification(true);
  }

  onMouseLeaveNotificationFloating(){
    this.handleShowContainerNotification(false);
  }

  onMouseEnterArrowTopFloating(){
    this.clearNotificationTimeout();
  }
}
