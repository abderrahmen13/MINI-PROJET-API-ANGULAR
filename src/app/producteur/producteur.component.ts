import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../model/Produit.model';
import { User } from '../model/User.model';
import { ProducteurService } from '../services/producteur.service';

@Component({
  selector: 'app-producteur',
  templateUrl: './producteur.component.html',
  styleUrls: ['./producteur.component.css']
})
export class ProducteurComponent implements OnInit {

  loginForm: FormGroup;
  user = new User();
  erreur = 0;
  produits = Array<Produit>();

  constructor(private producteurService: ProducteurService, private formBuilder: FormBuilder, private router:Router) {
    this.loginForm = this.formBuilder.group({
      ville: ['', Validators.required],
    });
   }

   ngOnInit(): void {
    this.getProduits();
  }

  getProduits() {
    this.producteurService.produits().subscribe((data) => {
      console.log(data);
      this.produits = data;
    }, (err) => { this.erreur = 1;});
  }

  addProduit() {
    let prod = new Produit();
    prod.name = this.loginForm.value['prodName'];
    prod.image = this.loginForm.value['prodImage'];
    prod.date_recolte = this.loginForm.value['prodDate_recolte'];
    prod.quantite = this.loginForm.value['prodQuantite'];
    prod.user = this.loginForm.value['prodUser'];
    this.producteurService.addproduit(prod).subscribe((data) => {
      console.log(data);
    }, (err) => { this.erreur = 1;});
  }

  updateProduit() {
    let id = this.loginForm.value['produitId'];
    this.producteurService.updateProduit(id).subscribe((data) => {
      console.log(data);
    }, (err) => { this.erreur = 1;});
  }

  deleteProduit() {
    let id = this.loginForm.value['produitId'];
    this.producteurService.deleteProduit(id).subscribe((data) => {
      console.log(data);
    }, (err) => { this.erreur = 1;});
  }

}
