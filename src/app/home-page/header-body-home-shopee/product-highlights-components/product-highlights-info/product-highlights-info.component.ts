import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ProductHighlight } from '../../../../login-and-register-user/interface/product-highlight';
import { Router } from '@angular/router';
import { GetDiscoveriesOfTheDayIsOutOfViewService } from '../../../service/get-discoveries-of-the-day-is-out-of-view.service';

@Component({
  selector: 'app-product-highlights-info',
  templateUrl: './product-highlights-info.component.html',
  styleUrl: './product-highlights-info.component.scss'
})
export class ProductHighlightsInfoComponent implements OnInit, AfterViewInit {
  @Input() product!: ProductHighlight;

   isOutOfView = false;

  @ViewChild('containerHighlightsForYou') containerHighlightsForYou!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private getDiscoveriesOfTheDayIsOutOfViewService: GetDiscoveriesOfTheDayIsOutOfViewService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log();
  }

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    if ('IntersectionObserver' in window){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const { boundingClientRect, isIntersecting } = entry;
            const isAboveViewport = boundingClientRect.bottom < 0; // Saiu para cima

            if (isAboveViewport && !isIntersecting) {
              this.getDiscoveriesOfTheDayIsOutOfViewService.updateDiscoveries(true);
            } else if (isIntersecting) {
              this.getDiscoveriesOfTheDayIsOutOfViewService.updateDiscoveries(false);
            }
          });
        },
        {
          threshold: 0 // Detecta quando qualquer parte da div entra ou sai da tela
        }
      );

      if (this.containerHighlightsForYou?.nativeElement) {
        observer.observe(this.containerHighlightsForYou.nativeElement);
      }
    }
  }
}
