import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { ReceiverComponent } from './receiver/receiver.component';
import { AuditInterceptorService } from './audit-interceptor.service';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [ReceiverComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuditInterceptorService,
    multi: true
    }
  ]
})
export class NotificationsModule { }
