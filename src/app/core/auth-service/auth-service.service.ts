import { Injectable } from '@angular/core';
import { MutateLocalStorage } from 'src/app/fake-db/localStorage-access';
import loginJson from "../../fake-db/login.json";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  instanceMutation: MutateLocalStorage;

  constructor() {
    this.instanceMutation = new MutateLocalStorage();
   }

  getAuthentication(){
    let authLogin = this.instanceMutation.getLocalStorage('auth');
    if(authLogin && authLogin.userName == loginJson.username && authLogin.password == loginJson.password){
      return true; 
    }else{
      return false;
    }
  }
}
