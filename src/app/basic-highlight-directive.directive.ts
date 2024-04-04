import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlightDirective]',
})
export class BasicHighlightDirectiveDirective implements OnInit {
  constructor(private elemRef: ElementRef) {}

  ngOnInit() {
    this.elemRef.nativeElement.style.backgroundColor = 'green';
  }
}
