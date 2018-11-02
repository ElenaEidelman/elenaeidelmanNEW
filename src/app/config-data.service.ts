import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './classes/message';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {
  
  constructor(private http:HttpClient) { }
  getJsonData(){
    return this.http.get("assets/dataJson.json").pipe(
      catchError(error => {
        console.log(error);
        return throwError(error)
      })
    );
 
  }
  sendEmail(message :Message){
    console.log('inside send email function');
    return this.http.post("../src/assets/servers.php",message).pipe(
      map(response => {
        console.log('Sending email was successfull', response);
        debugger
        return response;
      })
    );
  }
}
