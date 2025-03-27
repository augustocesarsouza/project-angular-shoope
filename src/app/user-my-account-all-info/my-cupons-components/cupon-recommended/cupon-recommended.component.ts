import { Component, Input, OnInit } from '@angular/core';
import { CuponRecommendedProps } from '../my-cupons/my-cupons.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cupon-recommended',
    templateUrl: './cupon-recommended.component.html',
    styleUrl: './cupon-recommended.component.scss',
    standalone: false
})
export class CuponRecommendedComponent implements OnInit {
  @Input() obj!: CuponRecommendedProps;

  constructor(private router: Router){
  }

  stringTitle = "";
  offDescription = "";

  ngOnInit(): void {
    const stringTitle = this.formatStringTitle(this.obj.titleCupon);
    this.stringTitle = stringTitle;

    const offDescription = this.formatStringDescription(this.obj.offDescription);
    this.offDescription = offDescription;
  }

  formatStringTitle = (title: string) => {
    let newString = '';

    newString = title;

    if (title.length >= 60) {
      newString = title.slice(0, 60) + '...';
    }

    return newString;
  };

  formatStringDescription = (description: string) => {
    let newString = '';

    newString = description;

    if (description.length >= 11) {
      newString = description.slice(0, 11) + '...';
    }

    return newString;
  };

}
