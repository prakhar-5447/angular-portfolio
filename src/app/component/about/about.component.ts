import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() color!: boolean;
  @Input() innerWidth!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
