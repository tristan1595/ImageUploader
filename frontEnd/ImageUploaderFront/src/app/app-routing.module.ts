import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { GaleryComponent } from './galery/galery.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path: 'galery',      component: GaleryComponent},
  {path: 'uploadImage', component: UploadImageComponent},
  {path: 'connexion',   component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
