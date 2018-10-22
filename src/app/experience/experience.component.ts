import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import { Experience } from '../classes/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience:Experience[];

  constructor(private configData: ConfigDataService) { }

  ngOnInit() {
    this.getExperience();
  }

  getExperience(){
    this.configData.getExperience().subscribe(experience => this.experience = experience);
  }
}
