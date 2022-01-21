import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../model/Categorie.model';
import { User } from '../model/User.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  categorieForm: FormGroup;
  user = new User();
  erreur = 0;
  consommateurs = Array<User>();
  producteurs = Array<User>();
  categories = Array<Categorie>();
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email'];
  displayedColumns2: string[] = ['id', 'firstName', 'lastName', 'email', 'valid'];
  displayedColumns3: string[] = ['id', 'name']

  constructor(private adminService: AdminService, private formBuilder: FormBuilder, private router:Router) {
    this.categorieForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.getConsommateurs();
    this.getProducteurs();
    this.getCategories();
  }

  getConsommateurs() {
    this.adminService.consommateurs().subscribe((data) => {
      console.log(data);
      this.consommateurs = data;
    }, (err) => { this.erreur = 1;});
  }

  getProducteurs() {
    this.adminService.producteurs().subscribe((data) => {
      console.log(data);
      this.producteurs = data;
    }, (err) => { this.erreur = 1;});
  }

  valide_producteur(id: number) {
    this.adminService.valide_producteur(id).subscribe((data) => {
      console.log(data);
    }, (err) => { this.erreur = 1;});
  }

  getCategories() {
    this.adminService.categories().subscribe((data) => {
      console.log(data);
      this.categories = data;
    }, (err) => { this.erreur = 1;});
  }

  addCategorie() {
    let categ = new Categorie();
    categ.name = this.categorieForm.value['name'];
    this.adminService.addCategorie(categ).subscribe((data) => {
      console.log(data);
    }, (err) => { this.erreur = 1;});
  }

}
