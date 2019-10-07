import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  serverErrorMessages: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService : UserService
  ){}


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  if(this.userService.isLoggedIn())
  this.router.navigateByUrl('/userprofile');

  }

  get f() { return this.loginForm.controls; }

    onSubmit() {
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
        this.submitted = true;
        this.userService.login(this.f.value).subscribe(
          res => {
            this.userService.setToken(res['token']);
            this.router.navigateByUrl('/userprofile');
          },
          err => {
            this.serverErrorMessages = err.error.message;
          }
        );
        
    }
    
}
