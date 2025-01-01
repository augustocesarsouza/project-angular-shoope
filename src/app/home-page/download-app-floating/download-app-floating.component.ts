import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-app-floating',
  templateUrl: './download-app-floating.component.html',
  styleUrl: './download-app-floating.component.scss'
})
export class DownloadAppFloatingComponent {
  @Input() handleShowContainerChange!: (newValue: boolean) => void;
  @Input() showContainerDownloadAppFloating!: boolean;

  onMouseEnterDownloadAppFloating(){
    this.handleShowContainerChange(true);
  }

  onMouseLeaveDownloadAppFloating(){
    this.handleShowContainerChange(false);
  }
}
