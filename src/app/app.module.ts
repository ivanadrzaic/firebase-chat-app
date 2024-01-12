import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AppRoutingModule } from './app.routes';
import { ChatModule } from './components/chatComponent/chat.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatComponent } from './components/chatComponent/chat.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AuthGuardComponent } from './auth/auth-guard/auth-guard.component';
import { UnauthenticatedChatComponent } from './components/unauthenticated-chat/unauthenticated-chat.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent, 
    DashboardComponent, UnauthenticatedChatComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    RouterModule,
    ChatModule,
    DashboardModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuardComponent],
})
export class AppModule { }


