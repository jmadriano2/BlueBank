import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from 'src/app/models/profile';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url:string = 'http://man-l76c6yt2:8080/BlueBanking/api/addCustomers';

  constructor(private http:HttpClient) { }

  // Add Profile
  addProfile(profile:Profile):Observable<Profile> {
    console.log(profile);
    return this.http.post<Profile>(this.url,profile,httpOptions);
  }
}
