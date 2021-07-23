import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { LoadingComponent } from './loading/loading.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path: 'loading', component: LoadingComponent},
  {path: 'galery', component: GaleryComponent},
  {path: 'uploadImage', component: UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
