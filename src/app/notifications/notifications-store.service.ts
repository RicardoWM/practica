import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsStoreService {
  private notifications = [];
  private notifications$ = new BehaviorSubject<any[]>([]);
  private notificationLast$ = new BehaviorSubject<any>('');

  constructor() {}

  public select$ = () => this.notifications$.asObservable();
  public selectLast$ = () => this.notificationLast$.asObservable();
  public dispatch(notification) {
  this.notifications.push(notification);
  this.notifications$.next([...this.notifications]);
  this.notificationLast$.next([...this.notifications[this.notifications.length - 1]]);
  }
}
