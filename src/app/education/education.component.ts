import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import { Education } from '../classes/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations:Education[];
  constructor(private dataConfig: ConfigDataService) { }

  ngOnInit() {
    this.getEducationsList();
  }

  getEducationsList():void {
    this.dataConfig.getEducation().subscribe(education => this.educations = education);
  }

}
