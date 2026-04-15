import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
    <section class="page-section">
      <h1>Welcome to Playoff Fantasy</h1>
      <p>Build your playoff lineup, track your roster, and get ready for the big games.</p>

      <div class="welcome-card">
        <h2>League access when you sign in</h2>
        <p>Sign in to view the league page and begin your fantasy journey.</p>
        <button class="primary-action" (click)="login()">Log in to League</button>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$
      .pipe(filter((isAuthenticated) => isAuthenticated), take(1))
      .subscribe(() => {
        this.router.navigate(['/league']);
      });
  }

  login(): void {
    this.auth.loginWithRedirect({ appState: { target: '/league' } });
  }
}
