import { SearchrepoService } from './../services/searchrepo.service';
import { Repo } from './../repo';

import { RepoService } from './../services/repo.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../search/serch.component.css']
})
export class searchComponent implements OnInit {
  prepo: Repo;
  user: any;
  username: string;
  repos: any;
  search: any;
  repositories: any;



  getprofilerepo(username) {
    interface ApiResponse {
      repo: string;
      name: string;
    }
    const promise = new Promise((resolve, reject) => {
      var link = (environment.serch + username + '/repos' +(environment.acesstoken));
      console.log(link)
      this.http.get<ApiResponse>(link).toPromise().then(
        (response) => {
          this.repos = response;
          resolve();

          console.log(response);
        },
        (error) => {
          alert('No user Found')
          reject(error);
        }
      );
    });
    return promise;
  }


  constructor(private RepoService: RepoService, private http: HttpClient, private SearchrepoService: SearchrepoService) {
  }

  findProfile() {

    this.RepoService.getProfileInfo(this.username).subscribe(result => {
      this.user = result;
      console.log(this.username)
    });
  }





  findrepo(gitsearch) {
    let search = gitsearch.value;
    console.log(search)
    let finallink = 'https://api.github.com/users/' + search + '/repos'+(environment.acesstoken);
    console.log(finallink);

    interface ApiResponse {
      repositories: string;
      name: string;
    }
    const promise = new Promise((resolve, reject) => {

      this.http.get<ApiResponse>(finallink).toPromise().then(
        (response) => {
          this.repositories = response;
          resolve();

          console.log(this.repositories);
        },
        (error) => {
          alert('error occured');
          reject(error);
        }
      );
    });
    return promise;


  }

  ngOnInit() {
  }

}
