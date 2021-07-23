import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfigService } from '../app-config.service';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  
  constructor(private http: HttpClient, private appConfig: AppConfigService) { 
    console.log("hey");
    this.load();
  }

  findAll(): Array<Utilisateur> {
    return this.utilisateurs;
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.appConfig.backEndUrl + "utilisateur/" + id);
  }

  create(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.appConfig.backEndUrl + "utilisateur", utilisateur).subscribe(resp => {
      this.load();
    }, error => console.log(error));
  }

  modify(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(this.appConfig.backEndUrl + "utilisateur/" + utilisateur.id, utilisateur);
  }

  deleteById(id: number) {
    this.http.delete(this.appConfig.backEndUrl + "utilisateur/" + id).subscribe(resp => {
      this.load
    }, error => console.log(error));
  }

  load() {
    this.http.get<Array<Utilisateur>>(this.appConfig.backEndUrl + "utilisateur").subscribe(resp => {
      this.utilisateurs = resp;
      console.log(this.utilisateurs);
    }, error => console.log(error));
  }
}
