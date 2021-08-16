import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, IUserRepo } from '../models/iuser';

const makeUrl = (path: string) => { return "https://api.github.com/" + path }

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getUser(user: string): Observable<IUser>{
    return this.http.get<any>( makeUrl(`users/${user}`) );
  }

  getRepos(url: string): Observable<IUserRepo[]>{
    return this.http.get<any>(url);
  }
}
