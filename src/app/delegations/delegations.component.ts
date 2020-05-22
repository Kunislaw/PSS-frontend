import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../datasharing.service';
import { User } from '../User';

@Component({
  selector: 'app-delegations',
  templateUrl: './delegations.component.html',
  styleUrls: ['./delegations.component.css']
})
export class DelegationsComponent implements OnInit {

  user: User;

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
        this.dataSharingService.isUserLoggedIn.next(true);
      });
    } else {
      this.router.navigate(["login"])
      this.dataSharingService.isUserLoggedIn.next(false);
    }
  }

  addDelegation(){
    this.router.navigate(["adddelegation"])
  }
  editDelegation(delegationId){
      console.error("EDYTUJE " + delegationId);
  }
  deleteDelegation(delegationId){
      this.userService.deleteDelegation(delegationId).subscribe((data) => {
        this.getUserData();
      });
  }

}
