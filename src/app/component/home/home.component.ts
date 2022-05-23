import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() color!: boolean;
  constructor() {}

  ngOnInit(): void {}
  scrollMidUp() {
    window.scrollTo(0, document.body.scrollHeight / 5);
  }
}
