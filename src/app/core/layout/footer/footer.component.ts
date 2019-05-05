import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from 'src/app/notifications/notifications-store.service';

@Component({
  selector: 'rgl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public lastNote$;

  constructor(public notificationsStore: NotificationsStoreService) { }

  ngOnInit() {
    this.lastNote$ = this.notificationsStore.selectLast$();
  }

}
