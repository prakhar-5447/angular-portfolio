import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  document!: HTMLElement;
  title = 'angular-portfolio';
  height: number=0;
  color: boolean = true;
  show: boolean = false;
  innerWidth!: number;

  constructor() {
    document.body.classList.add('bg-gradient-to-b');
    document.body.classList.add('from-mauvelous');
    document.body.classList.add('to-pale-pink');
    this.onResize();
    // for (let i = 0; i <= 5; i++) {
    //   this.height=this.height + document.body.scrollHeight;      
    // }
    this.height=this.height + document.body.scrollHeight;      
  }

  // TOGGLE SIDE NAVBAR
  toogle(): void {
    this.show = !this.show;
  }

  // CHANGE COLOR
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

  // SCROLL
  scroll(y: number) {
    window.scrollTo(0, y);
  }

  // AUTO ACTIVE LINK ON SCROLL
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > 50) {
      document.getElementById('ul')?.classList.add('bg-black');
    } else {
      if (document.getElementById('ul')?.classList.contains('bg-black'))
        document.getElementById('ul')?.classList.remove('bg-black');
    }

    const sections = document.querySelectorAll('section');
    const NavLi = document.querySelectorAll('nav ul li');
    let current: string = '';
    sections.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
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

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
