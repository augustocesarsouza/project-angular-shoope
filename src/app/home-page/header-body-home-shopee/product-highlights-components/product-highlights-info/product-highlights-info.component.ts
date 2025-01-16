import { Component, Input, OnInit } from '@angular/core';
import { ProductHighlight } from '../../../../login-and-register-user/interface/product-highlight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-highlights-info',
  templateUrl: './product-highlights-info.component.html',
  styleUrl: './product-highlights-info.component.scss'
})
export class ProductHighlightsInfoComponent implements OnInit {
  @Input() product!: ProductHighlight;

  constructor(private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log();
  }
}
