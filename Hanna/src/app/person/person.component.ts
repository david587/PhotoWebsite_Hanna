import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {
  galleryById: any;
  lightboxOpen= false;
  lightboxImage!: string;

  constructor(private route: ActivatedRoute,private emit: EmitterService,private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.galleryById = history.state.galleryById;

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

  openLightbox(imageUrl: any)
  {
    this.lightboxOpen= true;
    this.lightboxImage = imageUrl;
  }

  closeLightbox()
  {
    this.lightboxOpen = false;
    this.lightboxImage = '';
  }
}
