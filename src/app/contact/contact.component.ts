import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

   formFocus : boolean = false;
   

  hideLable(e:any){

    let value = e.target.value;

    if(value == ""){

      this.formFocus = false;


    }else{
      this.formFocus = true;

    }
      
    }

  }


  

 


