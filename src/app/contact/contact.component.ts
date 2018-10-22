import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import {FormControl, FormGroup, NgForm, Validators, FormBuilder, FormArray} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Contact } from '../classes/contacts';
import { SocialContact } from '../classes/socialContact';
import { Message } from '../classes/message';

/*export interface DialogData {
  animal: string;
  name: string;
}*/

/** Error when invalid control is dirty, touched, or submitted. */
/*export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:Contact[];
  whoAmi = {};
  socialContact:SocialContact[];
  contactForm : FormGroup;
  message:Message = {
    name: '',
    email:'',
    subject: '',
    text: ''
  };
  messages:Message[];
  constructor(private dataConfig:ConfigDataService, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  openDialog(title,text): void {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'50%',
      data : {title:title, text:text}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reset();
      console.log('The dialog was closed');
    });
    setTimeout(function(){
      dialogRef.close();
    },10000);
  }

  //matcher = new MyErrorStateMatcher();

    ngOnInit() {
      this.getContacts();
      this.contactForm = this.formBuilder.group({
        email : new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        name : new FormControl('',[
          Validators.required,
        ]),
        subject : new FormControl('',[
          Validators.required
        ]),
        text : new FormControl('',[
          Validators.required
        ]),
      });
      this.contactForm.valueChanges.subscribe(value => console.log(value));
      this.dataConfig.getMessage().subscribe(message => this.messages = message);
    }

    getContacts():void{
      this.dataConfig.getContact().subscribe(contact => this.contacts = contact);
      this.dataConfig.getWelcome().subscribe(welcome => this.whoAmi = welcome);
      this.dataConfig.getSocialContact().subscribe(socCont => this.socialContact = socCont);
    }
    onSubmit():void{
      if(this.contactForm.valid){
        let keys = Object.keys(this.message);
        for(let key of keys){
          this.message[key] = this.contactForm.get(key).value;
        }
        try{
          this.dataConfig.addMessageFromContactForm(this.message).subscribe(message => {this.messages.push(message)});
          this.openDialog('Hello ' + this.contactForm.get('name').value,'Thank you for contacting me, i will reply as soon as possible!');
        }
        catch(Error){
          console.log(Error.message);
          this.openDialog('Hello ' + this.contactForm.get('name').value,'Something went wrong, please try again');

        }
      }
    }

    reset(){
      this.contactForm.reset();
    }
}
