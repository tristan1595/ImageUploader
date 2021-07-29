package com.imageuploader.controller.dto;

public class ConnexionDTO {
	private String email;
	private String motDePasse;
	
	public ConnexionDTO() {
		super();
	}

	public ConnexionDTO(String email, String motDePasse) {
		super();
		this.email = email;
		this.motDePasse = motDePasse;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMotDePasse() {
		return motDePasse;
	}

	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}
}
