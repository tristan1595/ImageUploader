package com.imageuploader.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.imageuploader.model.Utilisateur;

public interface IUtilisateurRepository extends JpaRepository<Utilisateur, Long> {

}
