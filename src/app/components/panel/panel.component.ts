import { Component, OnInit, Output } from '@angular/core'
import { IUser, IUserRepo } from 'src/app/models/iuser'
import { GithubService } from 'src/app/services/github.service'

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  user = {} as IUser
  repos: IUserRepo[] = [];
  wasFound: boolean = false

  @Output() Search?: string = ''

  constructor(private githubService: GithubService) { }

  ngOnInit(): void { }

  getUser(user: string): void {
    this.githubService.getUser(user)
      .subscribe(
        response => { 
          this.user = response
          this.wasFound = true
          try {
            this.getRepos(this.user.repos_url)
          } catch (error) {
            console.log(error)
          }
        },
        error => { 
          this.wasFound = false
          console.log("Usuario nao encontrado") 
        }
      )
  }

  getRepos(url: string): void {
    this.githubService.getRepos(url)
      .subscribe(
        response => {
          console.log(response)
          this.repos = response
        },
        error => {
          console.log(error);
        }
      )
  }

  onType(): void {
    console.log("teste")
  }

}
