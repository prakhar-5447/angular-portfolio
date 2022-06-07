import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() color!: boolean;
  @Input() innerWidth!: number;
  uid: String = 'Zzt8bOHZjfTSHj7CKWTfFuGgmgh1';
  projects: any = [];

  constructor(private http: HttpClient) {
    this.http
      .get<any>(
        `https://firestore.googleapis.com/v1/projects/ino-app-20b90/databases/(default)/documents/Users/${this.uid}`
      )
      .subscribe((response) => {
        const projectUri = response.fields.project.arrayValue.values;

        // console.log(response);
        // console.log(response.fields.project.arrayValue.values);

        projectUri.forEach((element: any) => {
          const item = element.mapValue.fields;

          // console.log(element.mapValue.fields);
          // console.log(item.imageUri.stringValue);
          // console.log(item.title.stringValue);
          // console.log(item.desc.stringValue);
          // console.log(item.link.stringValue);

          let project = {
            image: item.imageUri.stringValue,
            title: item.title.stringValue,
            desc: item.desc.stringValue,
            link: item.link.stringValue,
          };

          // console.log(project);

          this.projects.push(project);
        });
      });
  }

  ngOnInit(): void {}
}
