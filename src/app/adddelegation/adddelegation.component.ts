import { Component, OnInit } from '@angular/core';
import { Delegation } from '../Delegation';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../datasharing.service';

@Component({
  selector: 'app-adddelegation',
  templateUrl: './adddelegation.component.html',
  styleUrls: ['./adddelegation.component.css']
})
export class AdddelegationComponent implements OnInit {

  user: User;

  addDelegationForm = new FormGroup({
    description: new FormControl(''),
    dateTimeStart: new FormControl(''),
    dateTimeStop: new FormControl(''),
    travelDietAmount: new FormControl(''),
    breakfastNumber: new FormControl(''),
    dinnerNumber: new FormControl(''),
    supperNumber: new FormControl(''),
    transportType: new FormControl(''),
    registrationData: new FormControl(''),
    ticketPrice: new FormControl(''),
    autoCapacity: new FormControl(''),
    km: new FormControl(''),
    accomodationPrice: new FormControl(''),
    otherTicketsPrice: new FormControl(''),
    otherOutlayDesc: new FormControl(''),
    otherOutlayPrice: new FormControl('')
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
        this.dataSharingService.isUserLoggedIn.next(true);
      });
    } else {
      this.router.navigate(["login"])
      this.dataSharingService.isUserLoggedIn.next(false);
    }
  }
  onSubmit(data){
    data.autoCapacity = parseInt(data.autoCapacity);
    data.transportType = parseInt(data.transportType);
      this.userService.addDelegation(this.user.id, data).subscribe((response) => {
        this.router.navigate(["delegations"]);
      });
  }

}
