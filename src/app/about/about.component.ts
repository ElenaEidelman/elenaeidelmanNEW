import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import { Contact } from '../classes/contacts';
import { SocialContact } from '../classes/socialContact';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = {};
  contact:Contact[];
  socialContact:SocialContact[];

  constructor(private dataConfig: ConfigDataService) { }

  ngOnInit() {
    this.getDataAbout();
  }
  getDataAbout(){
    this.dataConfig.getJsonData().subscribe(data => {
      this.about = data["about"];
      this.contact = data["contact"];
      this.socialContact = data["socialContact"];
    });
  }

}
