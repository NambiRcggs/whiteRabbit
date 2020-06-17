import { Injectable } from '@angular/core';
import loginJson from "../../fake-db/login.json";
import { HttpClient } from '@angular/common/http';
import { MutateLocalStorage } from 'src/app/fake-db/localStorage-access';
import { UserList,Result } from '../../models/userlist.model'
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  instanceMutation: MutateLocalStorage;
  constructor(private http:HttpClient) {
    this.instanceMutation =new MutateLocalStorage()
  }

  login(data){
    console.log(loginJson);
    if(data.userName == loginJson.username && data.password == loginJson.password){
      this.instanceMutation.setLocalStorage('auth',data);
      return true;
    }else{
      return false;
    }
  }

  loadUsers(url){
    if(this.instanceMutation.getLocalStorage('userList')){
      return of(this.instanceMutation.getLocalStorage('userList'));
    }else{      
      return this.http.get(url)
      .pipe(
        map((m:UserList)=>{
          this.instanceMutation.setLocalStorage('userList',m.results);
          return m.results
        })
      );      
    }
  }

  addNewUser(value){      
    this.instanceMutation.setLocalStorage('newUserList',{user:{...value,name:{fullName:value.name}}});
  }
}
