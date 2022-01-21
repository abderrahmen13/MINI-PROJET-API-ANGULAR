import { Produit } from "./Produit.model";
import { User } from "./User.model";

export class Reservation {
    user!: User;
    produit!: Produit;
    date_reservation!: Date;
}