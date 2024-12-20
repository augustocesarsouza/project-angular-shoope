import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-to-create-account-main',
  templateUrl: './step-to-create-account-main.component.html',
  styleUrl: './step-to-create-account-main.component.scss'
})
export class StepToCreateAccountMainComponent {
  @Input() valueNumberPhoneCreate!: string;
  whatStepIsNow: number = 3;

  containerFirstStep!: HTMLElement;
  containerSecondStep!: HTMLElement;
  containerLastOneStep!: HTMLElement;

  containerFirstBall!: NodeListOf<HTMLElement>;

  constructor(){}

  ngAfterViewInit(): void {
    if(typeof document === "undefined" || document === null) return;

    let containerFirstStep = document.querySelector('.container-first-step') as HTMLElement;
    let containerSecondStep = document.querySelector('.container-second-step') as HTMLElement;
    let containerLastOneStep = document.querySelector('.container-last-one-step') as HTMLElement;

    this.containerFirstStep = containerFirstStep;
    this.containerSecondStep = containerSecondStep;
    this.containerLastOneStep = containerLastOneStep;

    let containerFirstBall = document.querySelectorAll('.container-first-ball') as NodeListOf<HTMLElement>;
    this.containerFirstBall = containerFirstBall;

    if(this.whatStepIsNow === 1){
      this.putColorGreenFirstStep(containerFirstStep, 0);
    }
  }

  ClickContainerSecondStep(){
    this.whatStepIsNow = 2;

    this.putColorBlackFirstStep(this.containerFirstStep, 0);
    this.putColorBlackFirstStep(this.containerLastOneStep, 2);
    this.putColorGreenFirstStep(this.containerSecondStep, 1);
  }

  ClickContainerLastOneStep(){
    this.whatStepIsNow = 3;

    this.putColorBlackFirstStep(this.containerFirstStep, 0);
    this.putColorBlackFirstStep(this.containerSecondStep, 1);
    this.putColorGreenFirstStep(this.containerLastOneStep, 2);
  }

  putColorGreenFirstStep(containerStep: HTMLElement, whichBallNumber: number){
    containerStep.style.backgroundColor = '#38af3c';
    containerStep.style.border = 'none';

    let firstChild = containerStep.firstChild as HTMLElement;

    firstChild.style.color = '#fff';

    if(whichBallNumber === 0 || whichBallNumber === 1){

      let firstChild2 = this.containerLastOneStep.firstChild as HTMLElement;

      let svgElement = firstChild2.firstChild;

      if (svgElement instanceof SVGSVGElement) {
        svgElement.style.fill = 'rgba(0,0,0,.26)';
      }
    }

    let svgElement = firstChild.firstChild;

    if (svgElement instanceof SVGSVGElement) {
      svgElement.style.fill = '#fff';
    }

    (this.containerFirstBall[whichBallNumber].lastChild as HTMLElement).style.color = '#38af3c';
  }

  putColorBlackFirstStep(containerStep: HTMLElement, whichBallNumber: number){
    containerStep.style.backgroundColor = '#fff';
    containerStep.style.border = '1px solid rgba(0,0,0,.26)';

    let firstChild = containerStep.firstChild as HTMLElement;

    firstChild.style.color = 'rgba(0,0,0,.26)';

    (this.containerFirstBall[whichBallNumber].lastChild as HTMLElement).style.color = 'rgba(0,0,0,.26)';
  }
}


// background-color: ${props => props.$colorgreen ? "#38af3c" : "#fff"};
// border: ${props => props.$colorgreen ? "none" : "1px solid rgba(0,0,0,.26)"};

// span ->  color: ${props => props.$colorgreen ? "#fff" : "rgba(0,0,0,.26)"};

// span 2 -> color: ${props => props.$colorgreen ? "#38af3c" : "rgba(0,0,0,.26)"};
