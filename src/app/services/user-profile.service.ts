import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserProfileService {
  param1;
  param2;

  constructor(private http: HttpClient) { }
  
  getUser(usrToken, uId){
    this.param1=usrToken;
    this.param2=uId;
    return this.http.get('http://10.98.20.105/apsinthe/trackR/index.php/userprofile?token=' + this.param1 + '&uid=' + this.param2)
    .map(data => { return data; });
  }

}
