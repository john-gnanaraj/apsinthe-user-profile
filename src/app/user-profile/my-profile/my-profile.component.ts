import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor( private router: Router,private authservice:AuthService,private alertservice : AlertService, private _profileService: UserProfileService) { }

  items: any;

  ngOnInit() {
    let user = this.authservice.userAccessToken();
    console.log(user);

    let param1 = localStorage.getItem('userToken');
    let param2 = localStorage.getItem('userId');
    console.log("param", param1 + param2);
    /*this._profileService.getUser(param1, param2).subscribe( data => {
        console.log(data);
    });*/
    this._profileService.getUser(param1, param2).subscribe(data => this.items = data);
  }
}
