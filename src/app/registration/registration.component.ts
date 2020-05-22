import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    companyAddress: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    companyNip: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  get email() { return this.registrationForm.get('email'); }
  get companyAddress() { return this.registrationForm.get('companyAddress'); }
  get companyName() { return this.registrationForm.get('companyName'); }
  get companyNip() { return this.registrationForm.get('companyNip'); }
  get name() { return this.registrationForm.get('name'); }
  get lastName() { return this.registrationForm.get('lastName'); }
  get password() { return this.registrationForm.get('password'); }

  onSubmit(data) {
    this.userService.registerUser(data).subscribe(d => console.log(d));
    this.router.navigateByUrl("/login");
  }

}
