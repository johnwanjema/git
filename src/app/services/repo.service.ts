import { Repo } from './../repo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepoService {


  getProfileInfo(username: string) {
    return this.http.get((environment.serch) + username + (environment.acesstoken));
  
  }


  constructor(private http: HttpClient) {
    // this.repo = new Repo('', 0, '', '', '');
  }
}
