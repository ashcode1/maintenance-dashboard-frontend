import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

    

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    console.log(username, password);

    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['dashboard']);
    }


  }
}
