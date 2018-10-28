import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import { Skills } from '../classes/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  color = 'accent';
  mode = 'buffer';
  skills: Array<Skills>[];
  constructor(private dataConfig:ConfigDataService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(){
    let dataSkills = [[],[]];
    let skillsArr ;//= this.dataConfig.getDataConfig().skills;
    this.dataConfig.getJsonData().subscribe(skill => {
      skillsArr = skill["skills"];
      let lengthOfDataSkills = skillsArr.length;
      let halfOfLength = Math.floor(lengthOfDataSkills / 2);
      for(let item in skillsArr){
        if(+item < halfOfLength){
          dataSkills[0].push(skillsArr[item]);
        }
        else{
          dataSkills[1].push(skillsArr[item]);
        }
      }
      this.skills = dataSkills;
    });
  }
}
