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
    if (window.pageYOffset > 55) {
      let element = document.getElementById('navbar');
      if (element) {
        element.classList.add('sticky');
      }
    } else {
      let element = document.getElementById('navbar');
      if (element) {
        element.classList.remove('sticky');
      }
    }
  }
}
