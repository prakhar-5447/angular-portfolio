import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  document!: HTMLElement;
  title = 'angular-portfolio';
  color: boolean = true;
  window!: Window;
  
  change_color(): void {
    this.color = !this.color;
    if (this.color) {
      document.body.classList.remove('bg-gradient-to-b');
      document.body.classList.remove('from-wild-blue-yonder');
      document.body.classList.remove('to-mint-cream');
      document.body.classList.add('bg-gradient-to-b');
      document.body.classList.add('from-mauvelous');
      document.body.classList.add('to-pale-pink');
    } else {
      document.body.classList.remove('bg-gradient-to-b');
      document.body.classList.remove('from-mauvelous');
      document.body.classList.remove('to-pale-pink');
      document.body.classList.add('bg-gradient-to-b');
      document.body.classList.add('from-wild-blue-yonder');
      document.body.classList.add('to-mint-cream');
    }
  }

  constructor() {
    document.body.classList.add('bg-gradient-to-b');
    document.body.classList.add('from-mauvelous');
    document.body.classList.add('to-pale-pink');
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    el!.scrollIntoView();
}
}
