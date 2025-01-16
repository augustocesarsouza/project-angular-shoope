import { Component, Input } from '@angular/core';
import { ProductHighlight } from '../../../../login-and-register-user/interface/product-highlight';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-highlights-info',
  templateUrl: './product-highlights-info.component.html',
  styleUrl: './product-highlights-info.component.scss'
})
export class ProductHighlightsInfoComponent {
  @Input() product!: ProductHighlight;

  constructor(private router: Router){}
}
