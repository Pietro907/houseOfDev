import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GitHubRepository, GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-show',
  imports: [RouterLink, CommonModule],
  templateUrl: './page-show.component.html',
  styleUrl: './page-show.component.scss'
})
export class PageShowComponent implements OnInit {
  repoName: string = '';
  selectedReadme: string | null = null;
  repo: any = {};
  repoLang: any = {};
  
  constructor(private route: ActivatedRoute, private githubService: GithubService) { };

  ngOnInit() {
    this.repoName = this.route.snapshot.paramMap.get('repoName') || '';

    this.githubService.getRepoShow(this.repoName).subscribe(
      (data) => {
        console.log('Dati ricevuti:', data); 
        this.repo = data;
      },
      (error) => {
        console.error('Errore durante il recupero della repo:', error);
      }
    );

    this.githubService.getRepoLang(this.repoName).subscribe(
      (data) => {
        console.log('Dati ricevuti:', data);
        this.repoLang = Object.keys(data); 
      }
    );
    

  }

  showReader(repoName: string): void {
    this.githubService.getReadme(repoName).subscribe((readmeData) => {
      const decodedReadme = atob(readmeData.content);
      this.selectedReadme = decodedReadme;
    });
  };

}
