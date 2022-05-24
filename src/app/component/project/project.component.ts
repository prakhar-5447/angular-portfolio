import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() color!: boolean;
  @Input() innerWidth!: number;
  constructor() {}

  ngOnInit(): void {}

  projects = [
    {
      image: '../../../assets/images/project_page/Address-Book.png',
      link: 'https://github.com/prakhar-5447/Address-Book',
      title: 'Address Book',
    },
    {
      image: '../../../assets/images/project_page/COE-BOT.jpg',
      link: 'https://github.com/prakhar-5447/PROJECT-C',
      title: 'COE Bot',
    },
    {
      image: '../../../assets/images/project_page/Firstmy.jpg',
      link: 'https://github.com/prakhar-5447/firstmy',
      title: 'Firstmy',
    },
    {
      image: '../../../assets/images/project_page/ToDo-APP.png',
      link: 'https://github.com/prakhar-5447/angular-project',
      title: 'ToDo App',
    },
    {
      image: '../../../assets/images/project_page/Juicy-N-Yummy.png',
      link: 'https://github.com/pratham-0094/Juicy-N-Yummy',
      title: 'Juicy-N-Yummy',
    },
  ];
}
