import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent implements OnInit {
  currentUrlIsHome = true;

  constructor(private router: Router){
  }

  ngOnInit(): void {
    const currentUrl = this.router.url;

    if(currentUrl === "/"){
      this.currentUrlIsHome = true;
    }else {
      this.currentUrlIsHome = false;
    }
  }
}
