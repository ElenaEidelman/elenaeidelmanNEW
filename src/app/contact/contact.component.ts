import { Component, OnInit } from '@angular/core';
import { ConfigDataService } from '../config-data.service';
import {FormControl, FormGroup, NgForm, Validators, FormBuilder, FormArray} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { Contact } from '../classes/contacts';
import { SocialContact } from '../classes/socialContact';

export interface DialogData {
  animal: string;
  name: string;
}

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
    }

    getContacts():void{
      this.dataConfig.getContact().subscribe(contact => this.contacts = contact);
      this.dataConfig.getWelcome().subscribe(welcome => this.whoAmi = welcome);
      this.dataConfig.getSocialContact().subscribe(socCont => this.socialContact = socCont);
    }
    onSubmit():void{
      if(this.contactForm.valid){
        let nameContact = this.contactForm.controls['name'].value;
        let emailContact = this.contactForm.controls['email'].value;
        let subjectContact = this.contactForm.controls['subject'].value;
        let textContact = this.contactForm.controls['text'].value;
        console.log(this.contactForm.get('name'));
        console.log(this.contactForm.get('name').value);
        this.openDialog('Hello ' + this.contactForm.get('name').value,'Thank you for contacting me, i will reply as soon as possible!');
      }
    }

    reset(){
      this.contactForm.reset();
    }
}
