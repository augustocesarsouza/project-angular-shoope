import { Component, Input } from '@angular/core';

@Component({
  selector: 'download-app-floating',
  templateUrl: './download-app-floating.component.html',
  styleUrl: './download-app-floating.component.scss'
})
export class DownloadAppFloatingComponent {
  @Input() handleShowContainerChange!: (newValue: boolean) => void;
  @Input() showContainerDownloadAppFloating!: boolean;

  constructor(){}

  onMouseEnterDownloadAppFloating(){
    this.handleShowContainerChange(true);
  }

  onMouseLeaveDownloadAppFloating(){
    this.handleShowContainerChange(false);
  }
}
