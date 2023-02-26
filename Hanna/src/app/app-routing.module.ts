import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { GaleryComponent } from './galery/galery.component';
import { HomeComponent } from './home/home.component';
import { PackComponent } from './pack/pack.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {path:"", component:HomeComponent },
  {path:"about", component:AboutComponent},
  {path:"galery", component:GaleryComponent},
  {path:"pack", component: PackComponent},
  {path:"connect", component: ConnectComponent},
  { path: 'person', component: PersonComponent, data: { galleryById: null } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
