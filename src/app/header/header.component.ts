import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import { Header } from '../classes/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoName: string = 'Elena Eidelman';
  headerMenu:Header[];

  constructor(private dataConfig: ConfigDataService) { }

  ngOnInit() {
    this.getHeaderMenu();
  }

  getHeaderMenu(){
    this.dataConfig.getHeader().subscribe(header => this.headerMenu = header);
  }

}
