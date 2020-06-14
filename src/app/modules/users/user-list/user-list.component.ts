import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { Result } from '../../../models/userlist.model'
import {MutateLocalStorage} from '../../../fake-db/localStorage-access'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: Result[];
  instanceMutation: MutateLocalStorage;

  constructor(private _ApiServiceService:ApiServiceService) {    
    this.instanceMutation = new MutateLocalStorage();
  }

  ngOnInit() { 
    this.loadUsers();   
  }

  loadUsers(){
    const url = "https://randomuser.me/api/0.8/?results=20";
    this._ApiServiceService.loadUsers(url).subscribe(
      (users:Result[])=>{
        this.userList =users; 
        let addLocalUser = this.instanceMutation.getLocalStorage('newUserList')
        if(addLocalUser){
          this.userList.push(addLocalUser);     
        }
        console.log(users);
      }
    );
  }
  
  populateNewkyAdded(ev){
    console.log(ev)
    this.userList.push({user:{...ev,name:{fullName:ev.name}}});
  }
}
