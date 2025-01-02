import { Component } from '@angular/core';
 
import { CommonModule } from '@angular/common';
 
import { RouterOutlet } from '@angular/router';
 
import {ReactiveFormsModule} from '@angular/forms';
 
// import classes which are required for reactive forms
 
import {FormBuilder,Validators} from '@angular/forms'
 
 
@Component({
 
  selector: 'app-root',
 
  standalone: true,
 
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
 
  templateUrl: './app.component.html',
 
  styleUrl: './app.component.css',
 
  providers : [FormBuilder,Validators]
 
})
 
 
export class AppComponent 
 
{
 
// Inject FormBuilder service
 
public fbobj = new FormBuilder();
 
 
MyForm = this.fbobj.group(
 
  {
 
    // Add Multiple validations
 
    username :['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)] ],
 
    passowrd : ['',Validators.required],
 
    ConfirmPass : [''],
 
    MyClass : this.fbobj.group(
 
      {
 
        batch :['Python'],
 
        fees : ['25000'] 
 
      }
 
    )
 
  }
 
);
 
 
// Method to set FormControl fields through program
 
SetData()
 
{
 
  this.MyForm.setValue(
 
    {
 
      username : 'asdf',
 
      passowrd : 'abcd',
 
      ConfirmPass :  'abcd',
 
      MyClass : 
 
      {
 
        batch : 'Python',
 
        fees : '25000'
 
      }
 
    }
 
  )
 
}
 
}