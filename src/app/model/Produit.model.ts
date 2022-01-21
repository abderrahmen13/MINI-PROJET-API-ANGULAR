import { Categorie } from "./Categorie.model";
import { Reservation } from "./Reservation.model";
import { User } from "./User.model";

export class Produit {
    name!: string;
    image!: string;
    date_recolte!: Date;
    quantite!: number;
    user!: User;
    reservations!: Reservation;
    categorie!: Categorie;
}