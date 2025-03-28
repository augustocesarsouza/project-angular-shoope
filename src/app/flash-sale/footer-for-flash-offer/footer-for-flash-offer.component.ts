import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
    selector: 'app-footer-for-flash-offer',
    templateUrl: './footer-for-flash-offer.component.html',
    styleUrl: './footer-for-flash-offer.component.scss',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class FooterForFlashOfferComponent implements AfterViewInit, OnDestroy {
  @ViewChild('containerFirstPart') containerFirstPart!: ElementRef<HTMLDivElement>;
  isBelowViewport = false;

  settimeOutAny!: number;
  @Input() functionGetMoreProductPaginate!: (value: boolean) => void;

  ngAfterViewInit(): void {
    if(typeof window === 'undefined')return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const handleScroll = () => {
      if (this.containerFirstPart.nativeElement) {
        const rect = this.containerFirstPart.nativeElement.getBoundingClientRect();
        const isBelow = rect.bottom <= window.innerHeight;

        // setIsBelowViewport(isBelow);

        this.isBelowViewport = isBelow;
        this.functionGetMoreProductPaginate(isBelow);
      }
    };

    clearTimeout(this.settimeOutAny);

    this.settimeOutAny = setTimeout(() => {
      // Adiciona o evento de scroll
      window.addEventListener('scroll', handleScroll);

      // Checa inicialmente
      handleScroll();
    }, 100) as unknown as number;
  }

  ngOnDestroy(): void {
    clearTimeout(this.settimeOutAny);
  }
}
