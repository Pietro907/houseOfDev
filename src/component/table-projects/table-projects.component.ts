import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GitHubReadme, GitHubRepository, GithubService } from '../../services/github.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NavRouterOutletComponent } from "../nav-router-outlet/nav-router-outlet.component";


@Component({
  selector: 'app-table-projects',
  imports: [TableModule, CommonModule, ButtonModule, NavRouterOutletComponent],
  templateUrl: './table-projects.component.html',
  styleUrl: './table-projects.component.scss',
  providers: [GithubService],
})
export class TableProjectsComponent implements OnInit {
  repoList: GitHubRepository[] = [];

  first = 0;

  rows = 10;

  selectedReadme: string | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepositories().subscribe((repos) => {
      this. repoList = repos;
    });
 
  }
  
  showReadme(repoName: string): void {
    this.githubService.getReadme(repoName).subscribe((readmeData) => {
      const decodedReadme = atob(readmeData.content);
      this.selectedReadme = decodedReadme;
    });

  }


  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
      this.first = event.first;
      this.rows = event.rows;
  }

  isLastPage(): boolean {
      return this.repoList ? this.first + this.rows >= this.repoList.length : true;
  }

  isFirstPage(): boolean {
      return this.repoList ? this.first === 0 : true;
  }
}
