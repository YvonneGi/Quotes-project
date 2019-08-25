import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }
  @HostListener("click") onClicks(){
    this.bkground("red")
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.bkground("None")
  }
  private bkground(action: string) {
    this.elem.nativeElement.style.background = action;

  }
}
