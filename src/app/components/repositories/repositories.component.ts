import { Component, Input, OnInit } from '@angular/core';
import { IUserRepo } from 'src/app/models/iuser';

@Component({
  selector: 'repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repos: IUserRepo[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
