import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UtilisateurService } from '../service/utilisateur.service';
import { Utilisateur } from '../model/utilisateur';
import { ImageService } from '../service/image.service';
import { Image } from '../model/image';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  fileName= '';
  myFile:File | undefined;
  flag: boolean = false

  constructor(private http: HttpClient, private utilisateurService: UtilisateurService, private imageService: ImageService) { }

  onFileSelected(event: any) {
    
    const file:File = event.target.files[0];

    if(file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("image", file, file.name);
      this.myFile = file;
      this.flag = true;
    }

  }

  getAllUtilisateur(): Array<Utilisateur> {
    return this.utilisateurService.findAll();
  }

  getAllImage(): Array<Image> {
    return this.imageService.findAll();
  }

  ngOnInit(): void {
  }

}
