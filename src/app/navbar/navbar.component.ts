import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../datasharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn: boolean;
  constructor(private dataSharingService: DataSharingService, private router:Router) {
    this.dataSharingService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["login"]);
    this.dataSharingService.isUserLoggedIn.next(false);
  }
}
