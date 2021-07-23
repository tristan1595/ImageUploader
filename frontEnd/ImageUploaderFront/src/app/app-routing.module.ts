import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { GaleryComponent } from './galery/galery.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [
  {path: 'dragAndDrop', component: DragAndDropComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'galery', component: GaleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
