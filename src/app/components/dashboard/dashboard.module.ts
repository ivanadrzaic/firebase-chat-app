import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChatComponent } from '../chatComponent/chat.component';
import { ChatModule } from '../chatComponent/chat.module';



@NgModule({
  declarations: [
    // DashboardComponent
  ],
  imports: [
    CommonModule,
    ChatModule 
  ]
})
export class DashboardModule { }
