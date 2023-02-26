import { Component } from '@angular/core';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent {
  constructor(private emit: EmitterService){}
  

  scrollToTop()
  {
    //kiváltjuk az eseményt az emitben
    this.emit.onButton();
  }
}
