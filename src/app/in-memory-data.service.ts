/*import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 11, name: 'elena',email:'developermail.net@gmail.com',password:'IetcmhVcd996' },
      { id: 12, name: 'Narco',email: 'Marlen8088@gmail.com',password:'Ceo2mhVcd996' },
    ];
    const header = [
      {title:'about me',routerLink:'/aboutme'},
      {title:'education',routerLink:'/education'},
      {title:'skills',routerLink:'/skills'},
      {title:'experience',routerLink:'/experience'},
      {title:'portfolio',routerLink:'/portfolio'},
      {title:'contact',routerLink:'/contact'}
    ];
    const welcome = {titleName:'ELENA',titleLastName:'EIDELMAN',profActivity:'FRONT END WEB DEVELOPER',resume:'../assets/download/CV_Elena_Eidelman_WEB_eng'};
    const about = {title:'I am front-end web developer from Balfouria (Israel)', description:'During my studies, I do practic, where I had to develop a web site for a basketball team. After gradually began to study the technology of the web and I fell in love with it. After studying for a while I worked as a web master. After I finished the Front End Development course at the HIT Holon Institute of Technology and started working as a web developer at a small company in Haifa. Basically, my work is aimed at programming the client part, but also did not work much with server languages, such as PHP and C # (Asp.Net on WebForms and MVC platforms). But my main technologies are html / css, JavaScript, Jquery, Bootstrap, Ajax, also recently started to study TypeScript and Angular 6.'};
    const contact = [
      {title:'Email',communication:'mailto:',link:'marlen8088@gmail.com'},
      {title:'Phone',communication:'tel:',link:'0523385614'},
      {title:'WebSait',communication:'http://',link:'www.elenaeidelman.co.il'}
    ];
    const socialContact = [
      {icon:'facebook',link:'https://www.facebook.com/lena.orlovsky'},
      {icon:'vk',link:'https://vk.com/llllenulyallll'},
      {icon:'twitter',link:'#'},
      {icon:'linkedin',link:'https://www.linkedin.com/in/elena-eidelman/'},
      {icon:'instagram',link:'#'},
    ];
    const education = [
      {years:'2013 - 2016',profession:'BS.c of Management Information Systems',university:'Max Stern Yezreel Valley College',place:'Jezreel Valley (Galilee region) of Israel',description:'Work experience during the studies with programming languages like: JAVA, HTML/CSS, SQL, PHP. As well as experience in developing applications for smart phones of the Android platform on the editor AndroidStudio'},
      {years:'2018 - 2018',profession:'Bachelor of Course Front End Developer',university:'HIT – Holon Institute of Technology',place:'Holon, Israel',description:'Course focuses on the web technologies for developing the client side of web applications. The course embraced technologies as JavaScript (Es5, Es6), HTML5, jQuery, Bootstrap, TypeScript, Angular6'},
      {years:'currently',profession:'Client Technologies',university:'- - - - - - - ',place:'All places where can study',description:'Studying JavaScript, TypeScript and Angular6+'},

  ];
    const experience = [
      {years:'2018 - Present',jobTitle:'Web Developer',company:'EvenetGo',place:'Haifa, Israel',description:'Freelancer at EventGo on position Web Developer .'},
      {years:'2016 - 2017',jobTitle:'Web Master',company:'Simplex',place:'Haifa, Israel',description:'Webmaster at software company and digital marketing for hotels. Write  code : Html / Css / JavaScript / Jquery.'},
      {years:'2015 - Present',jobTitle:'Web Developer',company:'Gilboa Maayanot',place:'Gilboa Regional Council, Israel',description:'Freelance at  Gilboa / Maayanot basketball club. Website development from scratch integrated content and image according to customer requirements. Write in code  language: Html, Css, Jquery, JavaScript, PHP on the server side. Link: www.gilboamaayanot.co.il'}
    ];
    const portfolio = [
      {imgLink:'assets/images/portfolio/elenaeidelmanfront.jpg',title:'My first CV Web Sait',link:'http://www.elenaeidelman.co.il/'},
      {imgLink:'assets/images/portfolio/elenaeidelmanback.jpg',title:'Back office of Elena Eidelman Web Sait',link:'http://www.elenaeidelman.co.il/Admin/NotAdmin'},
      {imgLink:'assets/images/portfolio/gilboa.jpg',title:'My first work, Web Sait for backetball club',link:'http://www.gilboamaayanot.co.il'},
      {imgLink:'assets/images/portfolio/employees.jpg',title:'small JavaScript project, WebSQL database',link:'http://www.elenaeidelman.co.il/CheckPoint/WorkerHours.html'},
      {imgLink:'assets/images/portfolio/expenses.jpg',title:'small JavaScript project, Indexed Db database',link:'http://www.elenaeidelman.co.il/PersonalExpensesTracker/index.html'},
      {imgLink:'assets/images/portfolio/todolist.jpg',title:'small JavaScript project, To do list',link:'http://www.elenaeidelman.co.il/ToDoList/index.html'},
    ];
    const skills = [
      {title:'HTML',icon:'fab fa-html5'},
      {title:'CSS',icon:'fab fa-css3-alt'},
      {title:'JavaScript',icon:'fab fa-js-square'},
      {title:'Jquery',icon:'fas fa-file-code'},
      {title:'TypeScript',icon:'fas fa-file-code'},
      {title:'Ajax',icon:'fas fa-file-code'},
      {title:'Json',icon:'fas fa-file-code'},
      {title:'Angular 6',icon:'fab fa-angular'},
      {title:'Adobe Photoshop',icon:'fas fa-images'},
      {title:'Communication',icon:'far fa-smile-wink'},
  ];
    const messages = [{name:'elena',email:'e@e',subject:'h',text:'h'}];
    return {users, header, welcome, about, contact, socialContact, education,experience, portfolio, skills,messages};
  }
}
*/