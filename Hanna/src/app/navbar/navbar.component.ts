import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navVisible =false;
  
  onClickToggle()
  {
    if(this.navVisible == false){
      this.navVisible =true;
    }
    else{
      this.navVisible =false;
    }
  }
}
