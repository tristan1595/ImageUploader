import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: Array<Image> = new Array<Image>();

  constructor(private http: HttpClient, private appConfig: AppConfigService) { 
    this.load();
  }

  findAll() {
    return this.images;
  }

  findById(id: number): Observable<Image> {
    return this.http.get<Image>(this.appConfig.backEndUrl + "image/" + id);
  }

  create(utilisateur: Image) {
    this.http.post<Image>(this.appConfig.backEndUrl + "image", utilisateur).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  modify(utilisateur: Image): Observable<Image> {
    return this.http.put<Image>(this.appConfig.backEndUrl + "image/" + utilisateur.id, utilisateur);
  }

  deleteById(id: number) {
    this.http.delete(this.appConfig.backEndUrl + "image/" + id).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Image>>(this.appConfig.backEndUrl + "image").subscribe(resp => {
      this.images = resp;
    }, error => console.log(error));
  }
}
