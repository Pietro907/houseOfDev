import { Component, OnInit } from '@angular/core';
import { GithubService, GitHubRepository } from '../../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  imports: [CommonModule]
})
export class RepoListComponent implements OnInit {
  repositories: GitHubRepository[] = [];
  selectedReadme: string | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepositories().subscribe((repos) => {
      this. repositories= repos;
    });
  } 

  showReadme(repoName: string): void {
    this.githubService.getReadme(repoName).subscribe((readmeData) => {
      const decodedReadme = atob(readmeData.content);
      this.selectedReadme = decodedReadme;
    });
  }
}
