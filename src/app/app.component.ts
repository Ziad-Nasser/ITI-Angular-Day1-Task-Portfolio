import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './Components//hero/hero.component';
import { AboutComponent } from './Components//about/about.component';
import { SkillsComponent } from './Components//skills/skills.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Your Portfolio App';
}
