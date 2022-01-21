import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerFrom: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerFrom = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  submitForm()
  {
    console.log("FORM ",this.registerFrom.value) ; 
      localStorage.setItem("userData",JSON.stringify(this.registerFrom.value)) ; 
  }
}
