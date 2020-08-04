import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-quizapp';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = document.getElementById('navbar');
    if (element) {
      if (window.pageYOffset > 55) {
        element.classList.add('sticky');
      } else {
        element.classList.remove('sticky');
      }
    }
  }
}
