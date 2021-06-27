import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsStorageService } from 'src/app/Services/credentials-storage.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  logoUrl: string = environment.logoUrl;

  @Output() searchEvent = new EventEmitter<string>();

  foodToSearch: string = '';

  showSearch: boolean = true;

  isLogedIn: boolean = false;

  usersEmail: string | null = null;

  constructor(
    private _router: Router,
    private _credentialsStorageService: CredentialsStorageService
  ) {}

  ngOnInit(): void {
    this.showSearch = this._router.url === '/';

    this.checkLoginAndUpdateNavbarOptions();
  }

  checkLoginAndUpdateNavbarOptions() {
    if (this._credentialsStorageService.isLogenIn()) {
      this.isLogedIn = true;
      this.usersEmail = this._credentialsStorageService.getEmail().split("@")[0];
    }
  }

  emmitSearchEvent() {
    this._router.navigateByUrl('/');

    this.searchEvent.emit(this.foodToSearch.toLowerCase());
  }

  logoutUser(){
    if(confirm("You sure want to logout ?")){
      this._credentialsStorageService.clearCredentials();
      this._router.navigateByUrl("/login");
    }
  }

  navigateToHomePage(){
    this._router.navigateByUrl("/");
  }
}
