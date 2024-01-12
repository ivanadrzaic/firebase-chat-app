// login.component.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Prijavljen korisnik:', user);
        this.router.navigateByUrl('/dashboard');
  
      })
      .catch((error) => {
        console.error('Greška pri prijavi:', error);
      
      });
  }


}
