import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CepService } from '../services/cep.service';
import { UserService } from '../services/user.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { Cep } from "../services/cep";


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})

export class CepComponent implements OnInit {



  isLoading = true;
  isEditing = false;
  isLinear = true;

  users = [];
  cepForm: FormGroup;
  cep = new FormControl('', [
    Validators.required
  ]);
  bairro = new FormControl('', [
    Validators.required
  ]);
  localidade = new FormControl('', [
    Validators.required
  ]);
  logradouro = new FormControl('', [
    Validators.required
  ]);
  complemento = new FormControl('', [
    Validators.required
  ]);
  uf = new FormControl('', [
    Validators.required
  ]);
  numero = new FormControl('', [
    Validators.required
  ]);

  constructor(private cepService: CepService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    public toast: ToastComponent) { }



  ngOnInit() {
    
    this.cepForm = this.formBuilder.group({
      cep: this.cep,
      logradouro: this.logradouro,
      numero: this.numero,
      complemento: this.complemento,
      bairro: this.bairro,
      localidade: this.localidade,
      uf: this.uf
    });
  }

  getCep(cep) {
    console.log('teste:'+ cep);
    this.cepService.getCep(cep).subscribe(
      data => this.cep = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}