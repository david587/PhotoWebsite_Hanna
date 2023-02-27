import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(private emit: EmitterService,private renderer: Renderer2, private el: ElementRef){}
  
  ngOnInit(): void {
    this.emit.event.subscribe( ()=> {
      this.scrollToTop();
    } );
    
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


  scrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;
  
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, this.easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    };
  
    window.requestAnimationFrame(step);
  }
  
  easeInOutCubic(progress: number, startPosition: number, distance: number, duration: number) {
    progress /= duration/2;
    if (progress < 1) return distance/2*progress*progress*progress + startPosition;
    progress -= 2;
    return distance/2*(progress*progress*progress + 2) + startPosition;
  }

}
