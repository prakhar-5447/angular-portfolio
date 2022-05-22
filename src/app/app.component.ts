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
    const section = document.getElementById(id); //section with id of clicked li
    section!.scrollIntoView(); //scroll to section with same d
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > 100) {
      document.querySelector('nav')!.classList.add('bg-black');
    } else {
      if (document.querySelector('nav')!.classList.contains('bg-black'))
        document.querySelector('nav')!.classList.remove('bg-black');
    }
    const sections = document.querySelectorAll('section');
    const NavLi = document.querySelectorAll('nav ul li');
    let current: string = '';
    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 4) {
        current = section.getAttribute('id') ?? '';
      }
    });

    NavLi.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });
  }
}
