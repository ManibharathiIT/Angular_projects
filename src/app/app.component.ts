// cSpell: ignore keycodes

import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
//chips

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any=[];
  newData:any;
  url="assets/images.jfif";
  newphoto:any;
     form=new FormGroup({
     name:new FormControl('',[Validators.required]),
     email:new FormControl('',[Validators.required]),
     phone:new FormControl('',[Validators.required]),
     bio:new FormControl('',[Validators.required]),
     education:new FormControl('',[Validators.required]),
     skills:new FormControl('',[Validators.required]),
     photo:new FormControl('',[Validators.required]),
   })
   constructor(private service:ServiceService){
       this.service.getData().subscribe(Response=>this.data=Response);
    }
    onSubmit(form:any){
      this.newData={
      name:form.value.name,
      contact:{
        email:form.value.email,
        phone:form.value.phone,
      },
      bio:form.value.bio,
      education:form.value.education,
      skills:form.value.skills,
      photo:this.newphoto
      }
     console.log(this.newData)
      this.data.push(this.newData);
       console.log(this.data)
    }
    uploadPhoto(event:any){
      if(event.target.files){
        var reader=new FileReader();
       this.newphoto=reader.readAsDataURL(event.target.files[0]);
       console.log(this.newphoto)
      }
    
    }

    }
