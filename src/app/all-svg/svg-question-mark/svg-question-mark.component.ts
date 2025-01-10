import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-question-mark',
  templateUrl: './svg-question-mark.component.html',
  styleUrl: './svg-question-mark.component.scss'
})
export class SvgQuestionMarkComponent {
  @Input() width = '10px';
  @Input() height = '10px';
  @Input() fill = 'red';
}
