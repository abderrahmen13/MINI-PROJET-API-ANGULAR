import { Produit } from "./Produit.model";
import { Reservation } from "./Reservation.model";

export class User {
    username!: string;
    email!: string;
    password!: string;
    roles!: string[];
    firstname!: string;
    lastname!: string;
    ville!: string;
    adresse!: string;
    telephone!: string;
    token?: string;
    Valide!: boolean;
    produits!: Produit;
    reservation!: Reservation;
}