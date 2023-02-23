import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent {
  gallery = [
    {
      id: "BECSE-CSONTOS CSALÁD",
      img:[
        '../../assets/images/collage.png',
        '../../assets/images/logo.png',
        '../../assets/images/hanna.png'
      ] 
    },
    {
      id: "RITA",
      img:[
        '../../assets/images/logo.png',
        '../../assets/images/rita.png',
        '../../assets/images/hanna.png'
      ] 
    },
    {
      id: "ESZTER",
      img:[
        '../../assets/images/logo.png',
        '../../assets/images/hanna.png',
        '../../assets/images/collage.png'
      ] 
    },
  ]
  galleryById: any;

  sortById(id: any)
  {
    this.galleryById = this.gallery.find((picture) => picture.id === id);
    console.log(this.galleryById);
    //todo:
    //ha rányomnak akkor navigáljon át a person componensbe a galeryById adataival, igy egy komponenssel megoldható
    
  }
}
