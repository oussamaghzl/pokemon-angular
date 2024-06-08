import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'})

export class BorderCardDirective {

  private  initialColor: string = 'black';
  private  defaultColor: string = 'green';
  private  defaultHeight: number = 250;

  constructor(private el :ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor:string; // alias
  //@Input() pkmnBorderCard: string;  sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);

  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
  
  private setHeight(height: number) {
      this.el.nativeElement.style.height = `${height}px`
  }
  
}
