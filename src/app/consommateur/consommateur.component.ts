import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User.model';
import { ConsommateurService } from '../services/consommateur.service';

@Component({
  selector: 'app-consommateur',
  templateUrl: './consommateur.component.html',
  styleUrls: ['./consommateur.component.css']
})
export class ConsommateurComponent implements OnInit {

  loginForm: FormGroup;
  user = new User();
  erreur = 0;
  producteurs = Array<User>();

  constructor(private consommateurService: ConsommateurService, private formBuilder: FormBuilder, private router:Router) {
    this.loginForm = this.formBuilder.group({
      ville: ['', Validators.required],
      produit: ['', Validators.required],
      date_reservation: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.getProducteurs();
  }

  getProducteurs() {
    let ville = this.loginForm.value['ville'];
    this.consommateurService.producteurs(ville).subscribe((data) => {
      console.log(data);
      this.producteurs = data;
    }, (err) => { this.erreur = 1;});
  }

  reserver() {
    let data = {
      "produit":this.loginForm.value['produit'],
      "date_reservation":this.loginForm.value['date_reservation'],
    };
    this.consommateurService.reserver(data).subscribe((data2) => {
      console.log(data2);
    }, (err) => { this.erreur = 1;});
  }

}
