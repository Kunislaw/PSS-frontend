import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../datasharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  constructor(private service: UserService, private router:Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    let response = this.service.login(data.email,data.password);
    response.subscribe((d) => {
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("credentials", btoa(data.email+":"+data.password));
      localStorage.setItem("userId", d.toString());
      this.router.navigateByUrl("/");
      this.dataSharingService.isUserLoggedIn.next(true);
    });
  }

  // AtLeastOneDigitValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} | null => {
  //     const atLeastOneDigit = nameRe.test(control.value);
  //     return atLeastOneDigit ? {'atLeastOneDigit': {value: control.value}} : null;
  //   };
  // }

  // AtLeastOneLetterValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} | null => {
  //     const atLeastOneLetter = nameRe.test(control.value);
  //     return atLeastOneLetter ? {'atLeastOneLetter': {value: control.value}} : null;
  //   };
  // }

}
