import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chatComponent/chat.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardComponent } from './auth/auth-guard/auth-guard.component';
import { UnauthenticatedChatComponent } from './components/unauthenticated-chat/unauthenticated-chat.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'login', component: LoginComponent },
    { path: 'unauthenticated-chat', component: UnauthenticatedChatComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardComponent] 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
