import { Injectable } from '@angular/core';
import { DataToConfig } from './data'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Header } from './classes/header';
import { Contact } from './classes/contacts';
import { SocialContact } from './classes/socialContact';
import { Education } from './classes/education';
import { Experience } from './classes/experience';
import { Portfolio } from './classes/portfolio';
import { Skills } from './classes/skills';
import { Message } from './classes/message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigDataService {
  //data = DataToConfig;
  
  constructor(private http:HttpClient) { }
/*
  getDataConfig(){
    return this.data;
  }
  
  getHeader():Observable<Header[]>{
    return this.http.get<Header[]>('api/header');
  }
  getWelcome():Observable<object>{
    return this.http.get<any>('api/welcome');
  }
  getAbout():Observable<any>{
    return this.http.get<any>('api/about');
  }
  getContact():Observable<Contact[]>{
    return this.http.get<Contact[]>('api/contact');
  }
  getSocialContact():Observable<SocialContact[]>{
    return this.http.get<SocialContact[]>('api/socialContact');
  }
  getEducation():Observable<Education[]>{
    return this.http.get<Education[]>('api/education');
  }
  getExperience():Observable<Experience[]>{
    return this.http.get<Experience[]>('api/experience');
  }
  getPortfolio():Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>('api/portfolio');
  }
  getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>('api/skills');
  }

  addMessageFromContactForm(message: Message):Observable<Message>{
    return this.http.post<Message>('api/messages',message,httpOptions);
  }

  getMessage():Observable<Message[]>{
    return this.http.get<Message[]>('api/messages');
  }
*/
  getJsonData(){
    return this.http.get("assets/dataJson.json");
  }
}
