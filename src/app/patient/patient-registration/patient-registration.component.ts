import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  roles:string[]=['Physician','Nurse','Admin'];

  contactForm: FormGroup=new FormGroup({});

  constructor(public fb: FormBuilder) {
  
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required],
      formControlPhone: ['', Validators.required]
  });
  }
  onFormSubmit(){

  }
}