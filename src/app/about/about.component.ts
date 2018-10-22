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
    this.dataConfig.getAbout().subscribe(about => this.about = about);
    this.dataConfig.getContact().subscribe(contact => this.contact = contact);
    this.dataConfig.getSocialContact().subscribe(socCont => this.socialContact = socCont);
  }

}
