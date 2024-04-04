import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
@Directive({
  selector: '[better-highlighter]',
})
export class BetterHighligter implements OnInit {
  constructor(private elemRef: ElementRef, private rederer: Renderer2) {}
  ngOnInit(): void {
    this.backgroudColor = 'transparent';
  }

  @HostBinding('style.backgroundColor') backgroudColor: string;

  @HostListener('mouseenter') mouseover(eventdata: Event) {
    // this.rederer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'red'
    // );
    this.backgroudColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    // this.rederer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    this.backgroudColor = 'transparent';
  }
  @Input() defaultColor: string = 'orange';
}
