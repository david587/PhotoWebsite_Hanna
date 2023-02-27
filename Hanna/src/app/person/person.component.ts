import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute,private emit: EmitterService) {}

  
  scrollToTop()
  {
    //kiváltjuk az eseményt az emitben
    this.emit.onButton();
  }

  openLightbox(imageUrl: string)
  {
    this.lightboxOpen= true;
    this.lightboxImage = imageUrl;
  }

  closeLightbox()
  {
    this.lightboxOpen = false;
    this.lightboxImage = '';
  }

  ngOnInit(): void {
    // Retrieve the data from the router state object
    this.galleryById = history.state.galleryById;
  }
}
