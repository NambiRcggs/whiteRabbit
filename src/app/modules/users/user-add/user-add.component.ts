import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {  
  
  @Output() newUserAdded = new EventEmitter();

  addUser = new FormGroup({
    gender : new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email : new FormControl(''),
    username : new FormControl(''),
    password : new FormControl(''),
    dob : new FormControl(''),
    phone : new FormControl(''),
  });
  constructor(private _ApiServiceService:ApiServiceService) { }

  ngOnInit() {
  }
  onAdd(){    
    this._ApiServiceService.addNewUser(this.addUser.value);
    this.newUserAdded.emit(this.addUser.value);
  }
  
}
