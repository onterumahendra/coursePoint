import { Directive,ElementRef  } from '@angular/core';

@Directive({
  selector : "[CPLogo]"
  
 
})
export class LogoDirective {
  constructor(private el: ElementRef) {
    let logo = '<svg  width="32" height="32" viewBox="0 0 124 140">'+
    '<circle cx="62" cy="60" r="50" stroke="#F7931E" stroke-width="20" fill="#fff" />'+
    '<line x1="62" y1="-5" x2="62" y2="130" style="stroke:#fff;stroke-width:5" transform = "rotate(-15 70 70)"/>'+
    '<line x1="75" y1="99" x2="75" y2="139" style="stroke:#F7931E;stroke-width:20" transform = "rotate(-15 70 70)"/>'+
    'Sorry, your browser does not support inline SVG. '+ 
  '</svg> ';
    el.nativeElement.innerHTML = logo;
  }
}
