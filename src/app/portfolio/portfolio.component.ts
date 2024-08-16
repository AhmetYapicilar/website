import { Component } from '@angular/core';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { ProjectPollolocoComponent } from "./project-polloloco/project-polloloco.component";
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectJoinComponent, ProjectPollolocoComponent, CommentsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
