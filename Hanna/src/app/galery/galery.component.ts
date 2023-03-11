import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  constructor(private router: Router,private emit: EmitterService,private renderer: Renderer2, private el: ElementRef) {}
  
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
    this.emit.onButton();
  }

  gallery = [
    {
      id: "BECSE-CSONTOS CSALÁD",
      img:[
        '../../assets/images/becse-csontos-család/becse-csontos1.jpg',
        '../../assets/images/becse-csontos-család/IMG_8493-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8705-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8730.jpg',
        '../../assets/images/becse-csontos-család/IMG_8779-3.jpg',
        '../../assets/images/becse-csontos-család/IMG_8824-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8864-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8918.jpg',
        '../../assets/images/becse-csontos-család/IMG_8929-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8967-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8992-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_8918.jpg',
        '../../assets/images/becse-csontos-család/IMG_9010.jpg',
        '../../assets/images/becse-csontos-család/IMG_9028-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_9028-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_9066-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_9081-2.jpg',
        '../../assets/images/becse-csontos-család/IMG_9136.jpg',
        '../../assets/images/becse-csontos-család/IMG_9165.jpg',
        '../../assets/images/becse-csontos-család/IMG_9257.jpg',
        '../../assets/images/becse-csontos-család/IMG_9477.jpg',
        '../../assets/images/becse-csontos-család/IMG_9582.jpg',
        '../../assets/images/becse-csontos-család/IMG_9600.jpg',
      ] 
    },
    {
      id: "RITA",
      img:[
        '../../assets/images/rituu/IMG_0184.jpg',
        '../../assets/images/rituu/IMG_0194.jpg',
        '../../assets/images/rituu/IMG_0228.jpg',
        '../../assets/images/rituu/IMG_0229.jpg',
        '../../assets/images/rituu/IMG_0230.jpg',
        '../../assets/images/rituu/IMG_0254.jpg',
        '../../assets/images/rituu/IMG_0256.jpg',
        '../../assets/images/rituu/IMG_0258.jpg',
        '../../assets/images/rituu/IMG_0259.jpg',
        '../../assets/images/rituu/IMG_0262.jpg',
        '../../assets/images/rituu/IMG_0265.jpg',
        '../../assets/images/rituu/IMG_0290.jpg',
        '../../assets/images/rituu/IMG_0291.jpg',
        '../../assets/images/rituu/IMG_0319.jpg',
        '../../assets/images/rituu/IMG_0322.jpg',
        '../../assets/images/rituu/IMG_0325.jpg',
        '../../assets/images/rituu/IMG_0341.jpg',
        '../../assets/images/rituu/IMG_0348.jpg',
        '../../assets/images/rituu/IMG_0357.jpg',
        '../../assets/images/rituu/IMG_0367.jpg',
        '../../assets/images/rituu/IMG_0369.jpg',
        '../../assets/images/rituu/IMG_0373.jpg',
        '../../assets/images/rituu/IMG_0380.jpg',
        '../../assets/images/rituu/IMG_0419.2.jpg',
        '../../assets/images/rituu/IMG_0523.jpg',
        '../../assets/images/rituu/IMG_0535.jpg',
        '../../assets/images/rituu/IMG_0544.jpg',
        '../../assets/images/rituu/IMG_0562-2.jpg',
        '../../assets/images/rituu/IMG_0575.jpg',
        '../../assets/images/rituu/rita1.jpg',
      ] 
    },
    {
      id: "ESZTER",
      img:[
    '../../assets/images/eszti/eszti1.jpg',
      '../../assets/images/eszti/IMG_7198.jpg',
      '../../assets/images/eszti/IMG_7221.jpg',
        '../../assets/images/eszti/IMG_7233-2.jpg',
        '../../assets/images/eszti/IMG_7345-2.jpg',
      '../../assets/images/eszti/IMG_7363.jpg',
      '../../assets/images/eszti/IMG_7367.jpg',
        '../../assets/images/eszti/IMG_7368-2.jpg',
      '../../assets/images/eszti/IMG_7378.jpg',
      '../../assets/images/eszti/IMG_7385.jpg',
      '../../assets/images/eszti/IMG_7388.jpg',
      ] 
    },
    {
      id: "ZSÓFI",
      img:[
  '../../assets/images/zsofi/zsofi1.jpg',
  '../../assets/images/zsofi/IMG_7579.jpg',
  '../../assets/images/zsofi/IMG_7780.jpg',
  '../../assets/images/zsofi/IMG_7585.jpg',
  '../../assets/images/zsofi/IMG_7623.jpg',
  '../../assets/images/zsofi/IMG_7628.jpg',
  '../../assets/images/zsofi/IMG_7629.jpg',
  '../../assets/images/zsofi/IMG_7635.jpg',
  '../../assets/images/zsofi/IMG_7637.jpg',
  '../../assets/images/zsofi/IMG_7776.jpg',
  '../../assets/images/zsofi/IMG_7651.jpg',
  '../../assets/images/zsofi/IMG_7655.jpg',
  '../../assets/images/zsofi/IMG_7661.jpg',
  '../../assets/images/zsofi/IMG_7664.jpg',
  '../../assets/images/zsofi/IMG_7665.jpg',
  '../../assets/images/zsofi/IMG_7677.jpg',
  '../../assets/images/zsofi/IMG_7696.jpg',
  '../../assets/images/zsofi/IMG_7721.jpg',
  '../../assets/images/zsofi/IMG_7742.jpg',
  '../../assets/images/zsofi/IMG_7775.jpg',

      ] 
    },
  ]

  galleryById: any;

  sortById(id: any)
  {
    this.galleryById = this.gallery.find((picture) => picture.id === id);
    this.router.navigate(['/person'], { state: { galleryById: this.galleryById } });
  }
  
}
