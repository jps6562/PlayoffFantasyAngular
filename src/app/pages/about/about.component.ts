import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="page-section">
      <h1>About This App</h1>
      <p>Playoff Fantasy helps you discover the best playoff lineup by providing a clean, easy-to-use interface.</p>
      <div class="about-grid">
        <div>
          <h3>Built for Fans</h3>
          <p>Quick page navigation and simple team summaries make it easy to stay competitive.</p>
        </div>
        <div>
          <h3>Modern Design</h3>
          <p>Responsive styling and intuitive layout make the experience smooth on any device.</p>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
