import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../datasharing.service';
import { Delegation } from '../Delegation';
import { User } from '../User';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  editUserForm = new FormGroup({
    companyAddress: new FormControl(''),
    companyName: new FormControl(''),
    companyNip: new FormControl(''),
    name: new FormControl(''),
    lastName: new FormControl('')
  });

  constructor(private userService: UserService, private router:Router, private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLogged") == "true"){
      this.dataSharingService.isUserLoggedIn.next(true);
      this.getUserData();
    } else {
      this.router.navigate(["login"])
      this.dataSharingService.isUserLoggedIn.next(false);
    }
  }

  getUserData(){
    if(localStorage.getItem("isLogged") === "true"){
      this.userService.getAllUserData().subscribe(user => {
        this.user = user;
        this.editUserForm.get("companyAddress").setValue(this.user.companyAddress);
        this.editUserForm.get("companyName").setValue(this.user.companyName);
        this.editUserForm.get("companyNip").setValue(this.user.companyNip);
        this.editUserForm.get("name").setValue(this.user.name);
        this.editUserForm.get("lastName").setValue(this.user.lastName);
        this.dataSharingService.isUserLoggedIn.next(true);
      });
    } else {
      this.router.navigate(["login"])
      this.dataSharingService.isUserLoggedIn.next(false);
    }
  }

  onSubmit(data) {
    this.userService.editUser(this.user.id, data.companyAddress, data.companyName, data.companyNip, data.lastName, data.name).subscribe((data) => {
      this.router.navigate([""])
      this.dataSharingService.isUserLoggedIn.next(true);
    });
  }

}
