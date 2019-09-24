import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  // username: string;
  // password: string;

  // hidelogin: boolean;
  // ngOnInit() {
  //   this.hidelogin = true;
  // }
  // login(): void {
  //   if (this.username == 'admin' && this.password == 'admin') {
  //     this.hidelogin = false;
  //     this.router.navigate(["user"]);
  //   } else {
  //     this.hidelogin = true;
  //     alert("Invalid credentials");
  //   }
  // }

  ngOnInit(){

  }
  loginForm = new FormGroup({
    username: new FormControl('Username'),
    password: new FormControl('Password'),
  })

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.username == 'admin' && this.loginForm.value.password == 'admin'){
      this.router.navigate(["user"]);
    }else {
      alert("Invalid Credential")
    }

    
  }
}
