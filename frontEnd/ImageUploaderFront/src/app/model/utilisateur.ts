export class Utilisateur {
    id: number;
    version: number;
    pseudo: string;
    email: string;
    motDePasse: string;

    constructor(id?: number, version?: number, pseudo?: string, email?: string, motDePasse?: string) {
        this.id = id!;
        this.version = version!;
        this.pseudo = pseudo!;
        this.email = email!;
        this.motDePasse = motDePasse!;
    }
}