import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { GitHubRepository, GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NavRouterOutletComponent } from "../nav-router-outlet/nav-router-outlet.component";

@Component({
  selector: 'app-card-projects',
  imports: [RouterLink, CommonModule, NavRouterOutletComponent],
  templateUrl: './card-projects.component.html',
  styleUrl: './card-projects.component.scss'
})
export class CardProjectsComponent implements OnInit {
  repoList: GitHubRepository[] = [];
  repo: any = {};

  constructor(private githubService: GithubService) { };

  ngOnInit(): void {

    this.githubService.getRepositories().subscribe((repo) => {
      this.repoList = repo;
    });
 
  }

}


