import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name="Elena Eidelman";
  constructor(private dataConfig: ConfigDataService) { }

  ngOnInit() {
  }
}
