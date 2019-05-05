import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiverComponent } from './receiver/receiver.component';

const routes: Routes = [
  {
    path: 'receiver',
    component: ReceiverComponent
  },
  {
    path: '**',
    redirectTo: 'receiver'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
