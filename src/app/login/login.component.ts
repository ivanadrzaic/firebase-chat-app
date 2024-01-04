import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        // Uspješna prijava
        const user = userCredential.user;
        console.log('Prijavljen korisnik:', user);
        // Ovdje možeš redirektirati korisnika ili izvršiti neke druge akcije nakon prijave
      })
      .catch((error) => {
        // Greška pri prijavi
        console.error('Greška pri prijavi:', error);
        // Ovdje možeš prikazati poruku korisniku o neuspješnoj prijavi
      });
  }
}