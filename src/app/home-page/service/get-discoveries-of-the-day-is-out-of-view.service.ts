import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDiscoveriesOfTheDayIsOutOfViewService {
  private discoveries = new BehaviorSubject<boolean | null>(null);

  discoveries$ = this.discoveries.asObservable();

  updateDiscoveries(value: boolean) {
    this.discoveries.next(value);
  }

  get currentDiscoveries(): boolean | null {
  return this.discoveries.getValue();
  }
}
