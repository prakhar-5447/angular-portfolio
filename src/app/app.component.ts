import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  document!: HTMLElement;
  title = 'angular-portfolio';

  constructor() {
    document.body.classList.add('bg-gradient-to-b');
    document.body.classList.add('from-mauvelous');
    document.body.classList.add('to-pale-pink');
  }
}
