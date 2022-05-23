import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Input() color!: boolean;
  @Input() innerWidth!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
