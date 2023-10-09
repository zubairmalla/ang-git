import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;

  constructor(
    private _formBuilder:FormBuilder,
    private _router:Router,
    private _authenticationService:AuthenticationService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('IsLoggedIn');
    this.generateForm();
  }

  generateForm(){
    this.LoginForm=this._formBuilder.group({
      uName:[''],
      pWord:['']
    });
  }

  login(){
    if(this._authenticationService.tryLogin(this.LoginForm.value.uName,this.LoginForm.value.pWord)){
      this._router.navigate(['/admin']);
    }
    else{
      alert('Invalid Username and Password...');
    }
  }

}
