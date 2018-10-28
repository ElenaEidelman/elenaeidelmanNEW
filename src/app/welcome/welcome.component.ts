import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeData = {};

  constructor(private dataConfig: ConfigDataService) { }

  ngOnInit() {
    this.getWelcomeData();
  }

  getWelcomeData(){
    this.dataConfig.getJsonData().subscribe(welcome => this.welcomeData = welcome["welcome"]);
  }
}
