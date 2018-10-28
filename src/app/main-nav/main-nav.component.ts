import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigDataService } from '../config-data.service';
import { Header } from '../classes/header';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  headerMenu: Header[];
  logo:string = "Elena Eidelman";
  selectedMenu = {};

  /*isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );*/
    
  constructor(private breakpointObserver: BreakpointObserver, private dataConfig:ConfigDataService) {}

    ngOnInit(){
      this.getHeaderMenu();
    }
    getHeaderMenu(){
      this.dataConfig.getJsonData().subscribe(header => this.headerMenu = header["header"]);
    }
    clickedMenu(menu):void{
      this.selectedMenu = menu;
    }
  }
