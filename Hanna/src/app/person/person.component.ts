import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  constructor(private route: ActivatedRoute,private emit: EmitterService) {}
  
  scrollToTop()
  {
    //kiváltjuk az eseményt az emitben
    this.emit.onButton();
  }

  galleryById: any;
  
  ngOnInit(): void {
    // Retrieve the data from the router state object
    this.galleryById = history.state.galleryById;
    console.log(this.galleryById);
  }
}
