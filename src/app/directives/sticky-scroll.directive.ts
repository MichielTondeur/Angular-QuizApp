import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStickyScroll]',
})
export class StickyScrollDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.pageYOffset > 55) {
      this.el.nativeElement.classList.add('sticky');
    } else {
      this.el.nativeElement.classList.remove('sticky');
    }
  }
}
