import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName : new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    rememberMe : new FormControl(''),
  });

  constructor(
    private _ApiServiceService:ApiServiceService,
    private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.loginForm.value);
    let loginStatus = this._ApiServiceService.login(this.loginForm.value);
    if(loginStatus){
      this.router.navigateByUrl("/users");
    }

  }
}
