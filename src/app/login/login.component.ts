import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user = new User();
  erreur = 0;
  loading = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLoggedin() {
    this.loading = true;
    this.user.username = this.loginForm.value['email'];
    this.user.password = this.loginForm.value['password'];
    this.authService.login(this.user).subscribe((data) => {
        let jwToken = data.body?.token;
        this.authService.saveToken(jwToken);
        if(this.authService.isAdmin())
          this.router.navigate(['/admin']);
        else if(this.authService.isProducteur())
          this.router.navigate(['/producteur']);
        else if(this.authService.isConsommateur())
          this.router.navigate(['/consommateur']);
    }, (err) => { this.erreur = 1; this.loading = false;});
  }

  // loginUser() {
  //   let userRaw = localStorage.getItem('userData'); 
  //   if(userRaw)
  //   {
  //     let userData = JSON.parse(userRaw) ; 

  //       if(userData.email==this.loginForm.value['email']&& userData.password==this.loginForm.value['password'])
  //       {
  //         //alert("Mar7bééé !!")
  //         this.router.navigateByUrl('/blog') ; 
  //       }else {
  //         alert("!!")
  //       }
  //   }
  // }
  
}
