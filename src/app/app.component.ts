import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration';
  user = { 'fname':'','lname':'', 'email':'', 'password':'', 'confirm':'',
    'street':'', 'apt':'', 'city':'', 'state':'',  'lucky':'' };
  users = [];

  onSubmit(){
    this.users.push(this.user);
    this.user = { 'fname':'', 'lname':'', 'email':'', 'password':'', 'confirm':'',
      'street':'', 'apt':'', 'city':'', 'state':'', 'lucky':'' };
  }
}
