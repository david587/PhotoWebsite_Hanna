import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {
  constructor(private emit: EmitterService,private renderer: Renderer2, private el: ElementRef){}
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
        } else {
          this.renderer.removeClass(entry.target, 'show');
        }
      });
    });
  
    const hiddenElements = this.el.nativeElement.querySelectorAll('.hiden');
    hiddenElements.forEach((el: Element) => observer.observe(el));
  }
  

  scrollToTop()
  {
    //kiváltjuk az eseményt az emitben
    this.emit.onButton();
  }
}
