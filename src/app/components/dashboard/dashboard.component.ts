import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logout() {
    this.afAuth.signOut()
      .then(() => {
        console.log('Odjavljen korisnik');
        this.router.navigateByUrl('/login'); 
      })
      .catch((error) => {
        console.error('Greška pri odjavi:', error);
      });
  }
}
