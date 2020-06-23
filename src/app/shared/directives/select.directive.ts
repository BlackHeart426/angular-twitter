import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective {
  @Input('appSelect') color = 'blue'
  @Input() dStyle: {border?: string, borderRadius?: string}

  constructor(private el: ElementRef, private r: Renderer2) {
    // this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostBinding('style.color') elColor = null

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    this.elColor = this.color
    this.r.setStyle(this.el.nativeElement, 'background', 'lightGrey')
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    this.elColor = null
    this.r.setStyle(this.el.nativeElement, 'background', null)
    this.r.setStyle(this.el.nativeElement, 'border', null)
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
  }
}
