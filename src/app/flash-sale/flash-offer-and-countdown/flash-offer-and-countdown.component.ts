import { Component, Input, NgZone, OnDestroy, OnInit } from '@angular/core';

interface TimeLeftProps {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-flash-offer-and-countdown',
  templateUrl: './flash-offer-and-countdown.component.html',
  styleUrl: './flash-offer-and-countdown.component.scss'
})
export class FlashOfferAndCountdownComponent implements OnInit, OnDestroy {
//  @Input() timeLeft!;
  @Input() hours!: number;
  @Input() minutes!: number;
  @Input() seconds!: number;

  totalTimeInMillis!: number;
  targetTime!: number;
  timeLeft!: TimeLeftProps;

  private timer!: unknown;

  constructor(private ngZone: NgZone){}

  ngOnInit(): void {
    this.totalTimeInMillis =
      this.hours * 60 * 60 * 1000 +
      this.minutes * 60 * 1000 +
      this.seconds * 1000;

    this.targetTime = new Date().getTime() + this.totalTimeInMillis;

    this.timeLeft = this.calculateTimeLeft();

    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        const newTimeLeft = this.calculateTimeLeft();

        this.ngZone.run(() => {
          this.timeLeft = newTimeLeft;
        });
      }, 1000);
    });
  }

 calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const difference = this.targetTime - currentTime;

    let timeLeft: TimeLeftProps = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  formatHourMinuteSecond(hoursMinutesSeconds: number){
    return String(hoursMinutesSeconds || '00').padStart(2, '0');
  }

  ngOnDestroy(): void {
    if(this.timer){
      clearTimeout(this.timer as number);
    }
  }
}
