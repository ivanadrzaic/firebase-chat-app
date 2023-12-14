import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AppComponent } from './app.component';
import { environment } from '../environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AppRoutingModule } from './app.routes';
import { ChatModule } from './chatComponent/chat.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    ChatModule
  ]
})
export class AppModule { }


