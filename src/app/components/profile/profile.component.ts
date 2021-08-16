import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user = {} as IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
