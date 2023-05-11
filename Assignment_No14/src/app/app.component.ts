import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment_No13';
  contactForm!: FormGroup;

  constructor(public fbobj: FormBuilder) {}

    MarvellousForm = this.fbobj.group({
     username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      
      Email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      city: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*$')]],
      zip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]*$")]],
      comments: ['', [Validators.required, Validators.minLength(30)]]
    })
  }
 