import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() color!: boolean;
  @Input() innerWidth!: number;
  constructor() {}

  ngOnInit(): void {}
  scroll() {
    window.scrollTo(0, document.body.scrollHeight / 5);
  }
}
