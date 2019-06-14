import { User } from './../../user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  result: any;

  constructor(private userService: UserService, private http: HttpClient) {
    this.user = new User("", 0, '', '', '', "", "")
  }

  getRepos() {
    const repos = (environment.apiUrl +(environment.acesstoken)) ;


    this.http.get(repos).subscribe((data) => {
      this.result = data;
      console.log(this.result)

    });
  }


  ngOnInit() {
    this.userService.userInformation();
    this.user = this.userService.user;
  }
}
