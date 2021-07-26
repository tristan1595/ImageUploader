import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path: 'galery', component: GaleryComponent},
  {path: 'uploadImage', component: UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
