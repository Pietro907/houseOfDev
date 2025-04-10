import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { GitHubRepository, GithubService } from '../../../services/github.service';


@Component({
  selector: 'app-card-draw',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './card-draw.component.html',
  styleUrl: './card-draw.component.scss'
})

export class CardDrawComponent implements OnInit {

  count_hearts: number = 0;
    isLike: boolean = false;

    @Input() repo: any;
    repoList: GitHubRepository[] = [];
    
    constructor(private githubService: GithubService) { }
    
    ngOnInit(): void {
      
    }
    
    incrementsHearts() {
      this.isLike = !this.isLike;
      this.count_hearts += this.isLike ? 1 : -1;
    }
    

}


