import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UtilisateurService } from '../service/utilisateur.service';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  fileName= '';

  constructor(private http: HttpClient, private utilisateurService: UtilisateurService) { }

  onFileSelected(event: any) {
    
    const file:File = event.target.files[0];

    if(file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);
      console.log(formData);
    }

  }

  getAllUtilisateur() {
    return this.utilisateurService.findAll();
  }

  ngOnInit(): void {
  }

}
