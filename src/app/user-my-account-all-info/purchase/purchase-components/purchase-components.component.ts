import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-purchase-components',
    templateUrl: './purchase-components.component.html',
    styleUrl: './purchase-components.component.scss',
    standalone: false
})
export class PurchaseComponentsComponent implements AfterViewInit {
  whichWasClickedTopLayer = "1";
  @ViewChildren('spanClassification') spanClassifications!: QueryList<ElementRef<HTMLSpanElement>>;
  @ViewChildren('containerSpanName') containerSpanNames!: QueryList<ElementRef<HTMLSpanElement>>;

  ngAfterViewInit(): void {
    this.spanClassifications.toArray()[0].nativeElement.style.color = "#ee4d2d";
    this.containerSpanNames.toArray()[0].nativeElement.style.borderBottom = "2px solid #ee4d2d";
  }

  onClickChangeWhichWasClicked(number: string){
    this.whichWasClickedTopLayer = number;
    const indexNumber = parseInt(number) - 1;

    this.containerSpanNames.forEach((el) => {
      el.nativeElement.style.borderBottom = "2px solid rgba(45, 45, 45, 0.168627451)";
    });

    this.containerSpanNames.toArray()[indexNumber].nativeElement.style.borderBottom = "2px solid #ee4d2d";

    this.spanClassifications.forEach((el, index) => {

      if(index === indexNumber){
        // this.containerSpanNames.toArray()[indexNumber].nativeElement.style.borderBottom = "2px solid red";
        // console.log(this.containerSpanNames.toArray()[indexNumber].nativeElement);

        el.nativeElement.style.color = "#ee4d2d";
        el.nativeElement.style.fontWeight = "500";
        return;
      }else {
        el.nativeElement.style.color = "black";
        el.nativeElement.style.fontWeight = "500";
        // this.containerSpanNames.toArray()[indexNumber].nativeElement.style.borderBottom = "2px solid rgba(45, 45, 45, 0.168627451)";
      }
    })
  }

  arrumarDevolucaoReembolso(value: string){
    const valueString = value.slice(0, 15) + "...";
    return valueString;
  }
}
