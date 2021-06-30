import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CredentialsStorageService {
  /**
   * private String token;

	private boolean admin;

	private String email;

	private long srno;
   */

  private static STORAGE_KEY: string = 'creds';

  constructor() {}

  private getStorage() {
    return sessionStorage ? sessionStorage : localStorage;
  }

  private getJson(data: any) {
    return data ? JSON.parse(data) : {};
  }

  private getDataFromStorage() {
    return this.getJson(
      this.getStorage().getItem(CredentialsStorageService.STORAGE_KEY)
    );
  }

  getToken() {
    return 'Bearer ' + this.getDataFromStorage()['token'];
  }

  getEmail() {
    return this.getDataFromStorage()['email'];
  }

  getAdminStatus() {
    return this.getDataFromStorage()['admin'];
  }

  getUserId() {
    return Math.abs(parseInt(this.getDataFromStorage()['srno']) - 376);
  }

  saveCredentials(credentialsFromServer: any) {
    this.getStorage().clear();
    this.getStorage().setItem(
      CredentialsStorageService.STORAGE_KEY,
      JSON.stringify(credentialsFromServer)
    );
  }

  getCredentials() {
    return this.getStorage().getItem(CredentialsStorageService.STORAGE_KEY);
  }

  clearCredentials() {
    this.getStorage().clear();
  }

  isLogenIn() {
    return (
      this.getCredentials() !== null && this.getCredentials() !== undefined
    );
  }
}
