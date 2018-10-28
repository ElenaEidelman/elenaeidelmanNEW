import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import { Portfolio } from '../classes/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[];
  constructor(private dataConfig: ConfigDataService) { }

  getPortfolioByIndexArray(index:number){
    return this.portfolio[index];
  }
  ngOnInit() {
    this.getPortfolio();
    console.log(this.portfolio);
  }

  getPortfolio(){ 
    let portfolioARR = [];
    let portfolioFromData:Portfolio[];
    this.dataConfig.getJsonData().subscribe(portfolio => {
      portfolioFromData = portfolio["portfolio"];
      let itemCount = 1;
      let count = 1;
  
      /* get count of col-sm-4 divs that we need */
      if(portfolioFromData.length %3 == 0){
        itemCount = 2 * (portfolioFromData.length / 3);
      }
      else{
        itemCount = (2 * Math.floor(portfolioFromData.length / 3))+1;
      }
      while(count <= itemCount){
        portfolioARR.push(new Array());
        count++;
      }
   
      //fill portfolio arr like this template: [[{},{}],[{}],[{},{}]...]
      for(let dataIndex = 0; dataIndex < portfolioFromData.length; dataIndex++){
        for(let arrIndex = 0; arrIndex < portfolioARR.length; arrIndex++){
          if(arrIndex %2 == 0){
            let count = 0;
            if(portfolioFromData[dataIndex + 1] != undefined){
              while(count < 2){
                portfolioARR[arrIndex].push(portfolioFromData[dataIndex]);
                dataIndex++;
                count++;
              }
            }
            else{
              portfolioARR[arrIndex].push(portfolioFromData[dataIndex]);
              break;
            }
            continue;
          }
          else{
            portfolioARR[arrIndex].push(portfolioFromData[dataIndex]);
            dataIndex++;
            continue;
          }
        }
      }
      this.portfolio = portfolioARR;
  
      //this.portfolio = this.dataConfig.getDataConfig().portfolio;

    });

  }

}
